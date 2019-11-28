import React from 'react';
import Store from '../../Store';
import ArticleCard from '../../Cards/articleCard';
import Header from '../Helpers/Header/header';
import Spinner from '../Helpers/Spinner';
import ErrorPage from '../Helpers/Utils/errorPage';

const article = new Store();
class ViewAllArticles extends Store {
  constructor(props) {
    super(props);
    this.state = {
      articles: '',
      errorResponse: '',
    };
    this.url = 'https://teamwork-dev-app.herokuapp.com/api/v1/feeds';
  }
  componentDidMount() {
    this.timeOutHandler();
    this.getArticlesHandler();
  }
  getArticlesHandler = () => {
    article
      .getHandler(this.url)
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
    this.props.history.push('/articles/' + id);
  };
  render() {
    let articles = null;
    if (this.state.errorResponse) {
      articles = <ErrorPage error={this.state.errorResponse.error} />;
    } else {
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
    }
    return (
      <>
        <section className='tm-content'>
          <Header name='All Articles' />
          <div className='tm-value-card-container tm-remove-margin'>{articles}</div>
        </section>
      </>
    );
  }
}

export default ViewAllArticles;
