import React from 'react';
import Header from '../Helpers/Header/header';
import GifForm from '../Helpers/Forms/gif';
import Store from '../../Store';
import HandleResponse from '../Helpers/Utils';
const gif = new Store();

class Gif extends Store {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      success: false,
      errorResponse: '',
      successResponse: '',
    };
    this._isMounted = false;
    this.url = 'http://localhost:5000/api/v1/gifs';
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onsubmitHandler = (event) => {
    const form = new FormData();
    form.append('title', this.state.title);
    form.append('image', this.state.image);
    gif
      .postHandler(undefined, this.url, event, form)
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
    this.setState({ title: '' });
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
  }
  InputFieldHandler = () => {
    const title = document.getElementById('title');
    const image = document.getElementById('image');
    const submitBtn = document.getElementById('button');
    const smallTags = document.getElementsByTagName('small');
    this.InputHandler([title, image], submitBtn, smallTags);
  };
  render() {
    const { errorResponse, successResponse } = this.state;
    const response = HandleResponse(errorResponse, successResponse);
    const submitText = !this.state.success ? 'Post Gif' : 'Please wait ...';
    return (
      <>
        {response ? <div id='tm-response'>{response}</div> : null}
        <Header name='Create Gif' />
        <GifForm
          submitText={submitText}
          onChange={this.onChangeHandler}
          onSubmit={this.onsubmitHandler}
          image={this.state.image}
          title={this.state.title}
          InputFieldHandler={this.InputFieldHandler}
        />
      </>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default Gif;
