import React from 'react';
import Store from '../../Store';
import Header from '../Helpers/Header/header';
import CommentForm from '../Helpers/Forms/comment';
import HandleResponse from '../Helpers/Utils';

const store = new Store();

class Comment extends Store {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      comment: '',
      errorResponse: '',
      success: false,
      successResponse: '',
    };
    this.url = this.props.url;
  }
  componentDidMount() {
    this.timeOutHandler();
    this.getOneHandler();
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
  getOneHandler = () => {
    const { id } = this.props.object.match.params;
    if (id) {
      store
        .getHandler(this.url + id)
        .then((response) => this.check(response))
        .then((response) => {
          const id = response.data.articleid || response.data.gifid;
          this.setState({
            id,
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
        this.props.object.history.push(`/${this.props.route}/${this.state.id}`);
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
    const submitText = !this.state.success ? 'Create Comment' : 'Please wait ...';
    return (
      <section className='tm-form-container'>
        <Header name='Create a comment' />
        {response ? <div id='tm-response'>{response}</div> : null}
        <CommentForm
          onSubmit={this.onSubmitHandler}
          value={this.state.comment}
          Onchange={this.onChangeHandler}
          submitText={submitText}
          Onblur={this.InputFieldHandler}
        />
      </section>
    );
  }
}

export default Comment;
