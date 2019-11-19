import React from 'react';
import Store from '../../Store';
import ArticleCard from '../../Cards/articleCard';
import Header from '../Helpers/Header/header';
import Spinner from '../Helpers/Spinner';

const article = new Store();
class ViewAllArticles extends Store {
  constructor(props) {
    super(props);
    this.state = {
      articles: '',
      errorResponse: '',
    };
    this.url = 'http://localhost:5000/api/v1/feeds';
  }
  componentDidMount() {
    this.timeOutHandler();
    this.getArticlesHandler();
  }
  getArticlesHandler = () => {
    article
      .getAllHandler(this.url)
      .then((response) => this.check(response))
      .then((response) => {
        this.setState({ articles: response.data[0] });
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ errorResponse: { ...body } });
        });
      });
  };
  selectArticleHandler = (id) => {
    console.log(id);
  };
  render() {
    let articles = null;
    if (this.state.articles) {
      articles = this.state.articles.map((article) => {
        return (
          <ArticleCard
            title={article.title}
            key={article.id}
            id={article.id}
            article={article.article}
            Onclick={() => this.selectArticleHandler(article.id)}
          />
        );
      });
    } else {
      articles = <Spinner />;
    }

    return (
      <>
        <section className='tm-content'>
          <Header name='All Articles' />
          {articles}
        </section>
      </>
    );
  }
}

export default ViewAllArticles;
