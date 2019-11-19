import React from 'react';
import Store from '../../../Store';
import HandleResponse from '../Utils';
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
        <form
          id='gifForm'
          className='tm-form'
          onSubmit={this.onsubmitHandler}
          encType='multipart/form-data'
        >
          <label htmlFor='title'>
            Gif Title <span>*</span>
          </label>
          <input
            type='text'
            id='title'
            name='title'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.onChangeHandler}
            value={this.state.title}
          />
          <small>Please include gif title</small>

          <label htmlFor='image'>
            Image/Gif <span>*</span>
          </label>
          <input
            type='file'
            required
            id='image'
            name='image'
            onBlur={this.InputFieldHandler}
            onChange={this.onChangeHandler}
          />
          <small>You must upload an image/gif</small>

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

export default Gif;
