import React from 'react';
import Store from '../../../Store';
import HandleResponse from '../Utils';

class Article extends Store {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      title: '',
      id: '',
      success: false,
      errorResponse: '',
      successResponse: '',
    };
    this._isMounted = false;
    this.url = 'http://localhost:5000/api/v1/articles/';
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getArticleHandler = () => {
    const { id } = this.props.article.match.params;
    if (id) {
      this.getOneHandler(this.url + id)
        .then((response) => this.check(response))
        .then((response) => {
          this.setState({
            title: response.data.title,
            article: response.data.article,
            id: response.data.id,
          });
        })
        .catch((error) => {
          error.json().then((body) => {
            this.setState({ errorResponse: { ...body } });
          });
        });
    }
  };
  onsubmitHandler = (event) => {
    const { title, article } = this.state;
    const data = { title, article };
    this.editHandler(this.url + this.state.id, data, event)
      .then((response) => this.check(response))
      .then((data) => {
        this.setState({ success: false, successResponse: { ...data } });
        this.props.article.history.push(`/articles/${this.state.id}`);
        return;
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ success: false, errorResponse: { ...body } });
        });
      });
    this.setState({ success: true });
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
    this.getArticleHandler();
  }
  InputFieldHandler = () => {
    const title = document.getElementById('title');
    const article = document.getElementById('article');
    const submitBtn = document.getElementById('button');
    const smallTags = document.getElementsByTagName('small');
    this.InputHandler([title, article], submitBtn, smallTags);
  };
  render() {
    const { errorResponse, successResponse } = this.state;
    const response = HandleResponse(errorResponse, successResponse);
    const submitText = !this.state.success ? 'Edit Article' : 'Please wait ...';
    return (
      <>
        {response ? <div id='tm-response'>{response}</div> : null}
        <form className='tm-form' onSubmit={this.onsubmitHandler}>
          <label htmlFor='title'>
            Article Title <span>*</span>
          </label>
          <input
            type='text'
            id='title'
            required
            name='title'
            onBlur={this.InputFieldHandler}
            onChange={this.onChangeHandler}
            value={this.state.title}
          />
          <small>Please include the title of the article</small>

          <label htmlFor='article'>
            Article <span>*</span>
          </label>
          <textarea
            name='article'
            id='article'
            cols='30'
            rows='10'
            value={this.state.article}
            onChange={this.onChangeHandler}
            onBlur={this.InputFieldHandler}
          ></textarea>
          <small>Article field must not be empty</small>

          <button
            className='tm-btn-primary'
            id='button'
            disabled={true}
            type='submit'
          >
            {submitText}
          </button>
        </form>
      </>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Article;
