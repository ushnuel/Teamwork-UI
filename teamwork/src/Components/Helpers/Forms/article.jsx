import React from 'react';
import Form from './Form';
import HandleResponse from '../Utils';
const article = new Form();

class Article extends Form {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      title: '',
      success: false,
      errorResponse: '',
      successResponse: '',
    };
    this._isMounted = false;
    this.url = 'http://localhost:5000/api/v1/articles';
  }
  titleHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  articleHandler = (event) => {
    this.setState({ article: event.target.value });
  };
  onsubmitHandler = (event) => {
    const properties = this.removeProps(this.state);
    const data = { ...properties };
    article
      .postHandler(data, this.url, event)
      .then((response) => this.check(response))
      .then((data) => {
        return this.setState({ success: false, successResponse: { ...data } });
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ success: false, errorResponse: { ...body } });
        });
      });
    this.setState({ success: true });
    this.setState({
      title: '',
      article: '',
    });
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
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
    const submitText = !this.state.success
      ? 'Create Article'
      : 'Please wait ...';
    return (
      <>
        {response ? <div id='tm-response'>{response}</div> : null}
        <form className='tm-form' onSubmit={this.onsubmitHandler}>
          <label htmlFor='email'>
            Article Title <span>*</span>
          </label>
          <input
            type='text'
            id='title'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.titleHandler}
            value={this.state.title}
          />
          <small>Please include the title of the article</small>

          <label htmlFor='password'>
            Article <span>*</span>
          </label>
          <textarea
            name='article'
            id='article'
            cols='30'
            rows='10'
            value={this.state.article}
            onChange={this.articleHandler}
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
