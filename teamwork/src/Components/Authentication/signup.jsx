import React from 'react';
import SignUpForm from '../Helpers/Forms/signUp';
import Header from '../Helpers/Header/header';
import Store from '../../Store';
import HandleResponse from '../Helpers/Utils';
import SetState from './utils';

const signUp = new Store();

class SignUp extends Store {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      department: '',
      jobRole: '',
      gender: '',
      success: false,
      errorResponse: '',
      successResponse: '',
    };
    this._isMounted = false;
    this.url = 'http://localhost:5000/api/v1/auth/create-user';
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onsubmitHandler = (event) => {
    const properties = this.removeProps(this.state);
    const data = { ...properties };
    signUp
      .postHandler(data, this.url, event)
      .then((response) => this.check(response))
      .then((data) => {
        this.setState({ success: false, successResponse: { ...data } });
        sessionStorage.setItem('token', this.state.successResponse.data.token);
        return;
      })
      .catch((error) => {
        error.json().then((body) => {
          this.setState({ success: false, errorResponse: { ...body } });
        });
      });
    this.setState({ success: true });
    this.setState(SetState());
  };
  componentDidMount() {
    this._isMounted = true;
    this.timeOutHandler();
  }
  InputFieldHandler = () => {
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const jobrole = document.getElementById('jobrole');
    const submitBtn = document.getElementById('button');
    const smallTags = document.getElementsByTagName('small');
    signUp.InputHandler([email, password, jobrole], submitBtn, smallTags);
  };
  render() {
    const { errorResponse, successResponse } = this.state;
    const response = HandleResponse(errorResponse, successResponse);
    const submitText = !this.state.success ? 'Sign Up' : 'Please wait ...';
    return (
      <section className='tm-form-container'>
        {response ? <div id='tm-response'>{response}</div> : null}
        <Header name='Create' />
        <SignUpForm
          submitText={submitText}
          jobRole={this.state.jobRole}
          email={this.state.email}
          password={this.state.password}
          address={this.state.address}
          department={this.state.department}
          gender={this.state.gender}
          Onsubmit={this.onsubmitHandler}
          onChange={this.onChangeHandler}
          InputFieldHandler={this.InputFieldHandler}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
        />
      </section>
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default SignUp;
