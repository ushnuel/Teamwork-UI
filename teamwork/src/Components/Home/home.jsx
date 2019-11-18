import React from 'react';
import image from '../../Assets/tm_network.png';
import Button from '../Helpers/Button/button';
import Form from '../Helpers/Forms/Form';
import ArticleCard from '../../Cards/articleCard';

class Article extends Form {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      errorResponse: '',
    };
    this.url = 'http://localhost:5000/api/v1/articles';
  }
  componentDidMount() {
    this.timeOutHandler();
  }
  getArticlesHandler = () => {
    this.getAllHandler(this.url)
      .then((response) => this.check(response))
      .then((data) => {
        this.setState({ articles: data });
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ errorResponse: { ...body } });
        });
      });
  };
  render() {
    const articles = this.state.articles.map((article) => {
      return (
        <ArticleCard
          title={article.title}
          key={article.articleid}
          id={article.articleid}
          article={article.article}
        />
      );
    });
    return (
      <section className='tm-home'>
        <img src={image} alt='teamwork network' className='tm-img-home' />
        <div className='tm-interact-home'>
          <h1>
            Interact <span className='tm-color-word'>With</span> Your Colleagues
          </h1>
          <div className='tm-home-buttons'>
            <a href='/articles'>
              <Button
                classname='tm-btn-info btn-home'
                writeup='Create Article'
              />
            </a>
            <a href='/gifs'>
              <Button classname='tm-btn-info btn-home' writeup='Post Gif' />
            </a>
          </div>
        </div>
        <section>
          <h1>Recent Articles</h1>
          {articles}
        </section>
      </section>
    );
  }
}

export default Article;
