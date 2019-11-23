import React from 'react';
import ArticleForm from '../Helpers/Forms/article';
import Header from '../Helpers/Header/header';
import Store from '../../Store';
import HandleResponse from '../Helpers/Utils';
const article = new Store();

class CreateArticle extends Store {
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
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
    this.setState({ title: '', article: '' });
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
    const submitText = !this.state.success ? 'Create' : 'Please wait ...';
    return (
      <>
        <Header name='Create Article' />
        {response ? <div id='tm-response'>{response}</div> : null}
        <ArticleForm
          title={this.state.title}
          article={this.state.article}
          onSubmit={this.onsubmitHandler}
          onChange={this.onChangeHandler}
          submitText={submitText}
          InputFieldHandler={this.InputFieldHandler}
        />
      </>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default CreateArticle;
