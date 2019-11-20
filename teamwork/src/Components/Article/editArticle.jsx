import React from 'react';
import ArticleForm from '../Helpers/Forms/article';
import Header from '../Helpers/Header/header';
import Store from '../../Store';
import HandleResponse from '../Helpers/Utils';

class EditArticle extends Store {
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
    const { id } = this.props.match.params;
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
        this.props.history.push(`/articles/${this.state.id}`);
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
        <Header name='Edit Article' />
        <ArticleForm
          submitText={submitText}
          title={this.state.title}
          article={this.state.article}
          onSubmit={this.onsubmitHandler}
          InputFieldHandler={this.InputFieldHandler}
          onChange={this.onChangeHandler}
        />
      </>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default EditArticle;
