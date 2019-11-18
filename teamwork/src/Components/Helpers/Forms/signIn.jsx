import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import HandleResponse from '../Utils';

const signIn = new Form();

class SignIn extends Form {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorResponse: '',
      successResponse: '',
      success: false,
    };
    this._isMounted = false;
    this.url = 'http://localhost:5000/api/v1/auth/signin';
  }
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
  }
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  InputFieldHandler = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submitBtn = document.getElementById('button');
    const smallTags = document.getElementsByTagName('small');
    signIn.InputHandler([email, password], submitBtn, smallTags);
  };
  onsubmitHandler = (event) => {
    const properties = this.removeProps(this.state);
    const data = { ...properties };
    signIn
      .postHandler(data, this.url, event)
      .then((response) => this.check(response))
      .then((data) => {
        this.setState({ success: false, successResponse: { ...data } });
        sessionStorage.setItem('token', this.state.successResponse.data.token);
        this.props.history.push('/home');
        return;
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ success: false, errorResponse: { ...body } });
        });
      });
    this.setState({ success: true });
  };
  render() {
    const { errorResponse } = this.state;
    const response = HandleResponse(errorResponse);
    const submitText = !this.state.success ? 'Sign In' : 'Please wait ...';
    return (
      <>
        {response ? <div id='tm-response'>{response}</div> : null}
        <form className='tm-form' onSubmit={this.onsubmitHandler}>
          <label htmlFor='email'>
            Email Address <span>*</span>
          </label>
          <input
            type='email'
            id='email'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.emailHandler}
            value={this.state.email}
          />
          <small>Please provide a valid email</small>

          <label htmlFor='password'>
            Password <span>*</span>
          </label>
          <input
            type='password'
            id='password'
            value={this.state.password}
            required
            onChange={this.passwordHandler}
            onBlur={this.InputFieldHandler}
          />
          <small>Please provide a valid password</small>
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

export default withRouter(SignIn);
