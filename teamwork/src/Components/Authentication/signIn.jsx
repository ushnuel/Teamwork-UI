import React from 'react';
import SignInForm from '../Helpers/Forms/signIn';
import Header from '../Helpers/Header/header';
import Store from '../../Store';
import HandleResponse from '../Helpers/Utils';

const signIn = new Store();

class SignIn extends Store {
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
    this.url = 'https://teamwork-dev-app.herokuapp.com/api/v1/auth/signin';
  }
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      .then((response) => {
        this.setState({ success: false, successResponse: { ...response } });
        const { data } = this.state.successResponse;
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('isAdmin', data.isAdmin);
        sessionStorage.setItem('currentUser', data.userId);
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
      <section className='tm-form-container'>
        {response ? <div id='tm-response'>{response}</div> : null}
        <Header name='Sign In' />
        <SignInForm
          submitText={submitText}
          email={this.state.email}
          password={this.state.password}
          onSubmit={this.onsubmitHandler}
          onChange={this.onChangeHandler}
          InputFieldHandler={this.InputFieldHandler}
        />
      </section>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default SignIn;
