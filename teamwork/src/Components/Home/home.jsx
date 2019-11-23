import React from 'react';
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
    this.url = 'http://localhost:5000/api/v1/feeds';
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
        const articles = response.data[0].splice(0, 3);
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
            <a href='/auth/signin'>Log in</a> to view recent articles
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
        <div className='tm-interact-home'>
          <h3>Recently Published articles</h3>
        </div>
        {articles}
        <a href='/feeds'>
          <Button classname='tm-btn-info btn-home' writeup='View More' />
        </a>
      </section>
    );
  }
}

export default HomeTwo;
