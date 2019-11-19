import React from 'react';
import Store from '../../Store';
import Header from '../Helpers/Header/header';
import Spinner from '../Helpers/Spinner';
import ArticleDetail from './detail';
import Button from '../Helpers/Button/button';
import Comment from './articleComments';

const article = new Store();

class ViewArticle extends Store {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      errorResponse: '',
    };
    this.url = 'http://localhost:5000/api/v1/articles/';
  }
  componentDidMount() {
    this.timeOutHandler();
    this.viewSpecificArticle();
  }
  viewSpecificArticle = () => {
    const { id } = this.props.match.params;
    if (id) {
      article
        .getOneHandler(this.url + id)
        .then((response) => this.check(response))
        .then((data) => {
          this.setState({ article: data });
        })
        .catch((error) => {
          error.json().then((body) => {
            this.setState({ errorResponse: { ...body } });
          });
        });
    }
  };
  render() {
    let article = null;
    let comment = null;
    if (this.state.article) {
      const { data } = this.state.article;
      if (data.comments.length <= 0) {
        comment = 'No comments yet';
      } else {
        comment = data.comments.map((comment) => {
          return <Comment comment={comment} key={comment.commentid} />;
        });
      }
      article = (
        <section className='tm-content'>
          <Header name={data.title} />
          <ArticleDetail article={this.state.article} />
          <div className='tm-article-body'>{data.article}</div>
          <div className='tm-comment-div'>
            <a href={`/articles/${data.id}/comment`}>
              <Button
                writeup='Comment on this article'
                classname='tm-btn-info tm-read-more'
              />
            </a>
          </div>
          <h2>Comments</h2>
          {comment}
          <div className='tm-home-buttons'>
            <a href={`/articles/${data.id}`}>
              <Button
                writeup='Delete Article'
                classname='tm-btn-danger tm-read-more'
              />
            </a>
            <a href={`/articles/${data.id}`}>
              <Button
                writeup='Edit Article'
                classname='tm-btn-success tm-read-more'
              />
            </a>
          </div>
        </section>
      );
    } else {
      article = <Spinner />;
    }
    return <>{article}</>;
  }
}

export default ViewArticle;
