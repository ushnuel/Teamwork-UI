import React from 'react';
import Store from '../../Store';
import Header from '../Helpers/Header/header';
import CommentForm from '../Helpers/Forms/articleComment';
import HandleResponse from '../Helpers/Utils';

const article = new Store();

class CommentOnArticle extends Store {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      comment: '',
      errorResponse: '',
      success: false,
      successResponse: '',
    };
    this.url = 'http://localhost:5000/api/v1/articles/';
  }
  componentDidMount() {
    this.timeOutHandler();
    this.getArticleHandler();
  }
  onChangeHandler = (e) => {
    this.setState({ comment: e.target.value });
  };
  InputFieldHandler = () => {
    const comment = document.getElementById('comment');
    const submitBtn = document.getElementById('button');
    const smallTags = document.getElementsByTagName('small');
    this.InputHandler([comment], submitBtn, smallTags);
  };
  getArticleHandler = () => {
    const { id } = this.props.match.params;
    if (id) {
      article
        .getOneHandler(this.url + id)
        .then((response) => this.check(response))
        .then((response) => {
          this.setState({
            id: response.data.id,
            successResponse: { ...response },
          });
        })
        .catch((error) => {
          error.json().then((body) => {
            this.setState({
              errorResponse: { ...body },
            });
          });
        });
    }
  };
  onSubmitHandler = (event) => {
    const { comment, id } = this.state;
    this.postHandler({ comment }, this.url + `${id}/comment`, event)
      .then((response) => this.check(response))
      .then((response) => {
        this.setState({ successResponse: { ...response } });
        this.props.history.push(`/articles/${this.state.id}`);
        return;
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({
            errorResponse: { ...body },
          });
        });
      });
  };
  render() {
    const { errorResponse, successResponse } = this.state;
    const response = HandleResponse(errorResponse, successResponse);
    const submitText = !this.state.success
      ? 'Create Comment'
      : 'Please wait ...';
    return (
      <>
        <Header name='Create a comment' />
        {response ? <div id='tm-response'>{response}</div> : null}
        <CommentForm
          onSubmit={this.onSubmitHandler}
          value={this.state.comment}
          Onchange={this.onChangeHandler}
          submitText={submitText}
          Onblur={this.InputFieldHandler}
        />
      </>
    );
  }
}

export default CommentOnArticle;
