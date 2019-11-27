import React from 'react';
import Store from '../../Store';
import Header from '../Helpers/Header/header';
import Spinner from '../Helpers/Spinner';
import ArticleDetail from '../Article/detail';
import Button from '../Helpers/Button/button';
import Comment from '../Article/articleComments';
import ErrorPage from '../Helpers/Utils/errorPage';

const gif = new Store();

class ViewGif extends Store {
  constructor(props) {
    super(props);
    this.state = {
      gif: '',
      errorResponse: '',
    };
    this.url = 'http://localhost:5000/api/v1/gifs/';
  }
  componentDidMount() {
    this.timeOutHandler();
    this.viewSpecificGif();
  }
  viewSpecificGif = () => {
    const { id } = this.props.match.params;
    if (id) {
      gif
        .getHandler(this.url + id)
        .then((response) => this.check(response))
        .then((data) => {
          console.log('DATA::', data)
          this.setState({ gif: data });
        })
        .catch((error) => {
          error.json().then((body) => {
            this.setState({ errorResponse: { ...body } });
          });
        });
    }
  };
  render() {
    let gif = null;
    let comment = null;
    if (this.state.errorResponse) {
      gif = <ErrorPage error={this.state.errorResponse.error} />;
    } else {
      if (this.state.gif) {
        const { data } = this.state.gif;
        if (data.comments.length <= 0) {
          comment = 'No comments yet';
        } else {
          comment = data.comments.map((comment) => {
            return <Comment comment={comment} key={comment.commentid} />;
          });
        }
        gif = (
          <section className='tm-content'>
            <Header name={data.title} />
            <ArticleDetail response={this.state.gif} />
            <img src={data.url} alt='' className='tm-img-upload' />
            <div className='tm-comment-div'>
              <a href={`/gifs/${data.id}/comment`}>
                <Button
                  writeup='Comment on this gif'
                  classname='tm-btn-info tm-read-more'
                />
              </a>
            </div>
            <h2>Comments</h2>
            {comment}
            <div className='tm-home-buttons'>
              <a href={`/gifs/${data.id}/delete`}>
                <Button
                  writeup='Delete Gif'
                  classname='tm-btn-danger tm-read-more'
                />
              </a>
            </div>
          </section>
        );
      } else {
        gif = <Spinner />;
      }
    }
    return <>{gif}</>;
  }
}

export default ViewGif;
