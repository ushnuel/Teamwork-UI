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
  titleChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  };
  imageChangeHandler = (e) => {
    this.setState({
      image: URL.createObjectURL(e.target.files[0]),
    });
  };
  onsubmitHandler = (event) => {
    event.preventDefault();
    const form = document.querySelector('#gifForm');
    const formData = new FormData(form);
    gif
      .postImageHandler(this.url, formData)
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
    this.setState({ title: '', image: '' });
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
    let image = null;
    image = this.state.image ? (
      <img src={this.state.image} alt='' className='tm-img-upload' />
    ) : null;
    return (
      <>
        <Header name='Create Gif' />
        {response ? <div id='tm-response'>{response}</div> : null}
        <GifForm
          submitText={submitText}
          imageChange={this.imageChangeHandler}
          titleChange={this.titleChangeHandler}
          onSubmit={this.onsubmitHandler}
          title={this.state.title}
          image={image}
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
