import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Assets/tm_network.png';
import Spinner from '../Helpers/Spinner';
import Button from '../Helpers/Button/button';
import ArticleCard from '../../Cards/articleCard';
import Store from '../../Store';
const article = new Store();

class HomeTwo extends Store {
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
        const articles = response.data[0].splice(0, 4);
        this.setState({ articles: articles });
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
      articles = (
        <div className='tm-error-home'>
          <h4>
            <Link to='/auth/signin'>Log in</Link>
            to view recent articles
          </h4>
        </div>
      );
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
      <section className='tm-home'>
        <section className='tm-home-greeting'>
          <div className='tm-img-home'>
            <img src={image} alt='teamwork network' />
          </div>
          <div className='tm-interact-home'>
            <h1>
              Interact <span className='tm-color-word'>With</span> <br /> Your Colleagues
            </h1>
            <div className='tm-home-buttons'>
              <Link to='/articles'>
                <Button writeup='Create Article' classname='tm-btn-info btn-home' />
              </Link>
              <Link to='/gifs'>
                <Button writeup='Create Gif' classname='tm-btn-info btn-home' />
              </Link>
            </div>
          </div>
        </section>
        <div className='tm-interact-home'>
          <h3>Recently Published articles</h3>
        </div>
        <div className='tm-value-card-container tm-remove-margin'>{articles}</div>
        <div className='tm-center-obj'>
          <Link to='/feeds'>
            <Button writeup='View More' classname='tm-btn-info btn-home' />
          </Link>
        </div>
      </section>
    );
  }
}

export default HomeTwo;
