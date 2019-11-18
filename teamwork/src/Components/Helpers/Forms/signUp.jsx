import React from 'react';
import Form from './Form';
import HandleResponse from '../Utils';
const signUp = new Form();

class SignUp extends Form {
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
  emailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  jobroleHandler = (event) => {
    this.setState({ jobRole: event.target.value });
  };
  genderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  departmentHandler = (event) => {
    this.setState({ department: event.target.value });
  };
  addressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  firstnameHandler = (event) => {
    this.setState({ firstname: event.target.value });
  };
  lastnameHandler = (event) => {
    this.setState({ lastname: event.target.value });
  };
  onsubmitHandler = (event) => {
    const properties = this.removeProps(this.state);
    const data = { ...properties };
    signUp
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
    this.setState({
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      address: '',
      department: '',
      jobRole: '',
      gender: '',
    });
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
          <small>Email address is required</small>

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
          <small>Password field must not be empty</small>

          <label htmlFor='jobrole'>
            Job Role <span>*</span>
          </label>
          <input
            type='text'
            id='jobrole'
            required
            onBlur={this.InputFieldHandler}
            onChange={this.jobroleHandler}
            value={this.state.jobRole}
          />
          <small>You must indicate if employee is an admin or not</small>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            onBlur={this.InputFieldHandler}
            onChange={this.firstnameHandler}
            value={this.state.firstname}
          />
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            onBlur={this.InputFieldHandler}
            onChange={this.lastnameHandler}
            value={this.state.lastname}
          />
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            onBlur={this.InputFieldHandler}
            onChange={this.addressHandler}
            value={this.state.address}
          />
          <label htmlFor='firstname'>Department</label>
          <input
            type='text'
            id='department'
            onBlur={this.InputFieldHandler}
            onChange={this.departmentHandler}
            value={this.state.department}
          />
          <label htmlFor='gender'>Gender</label>
          <select
            name='gender'
            id='gender'
            onBlur={this.InputFieldHandler}
            onChange={this.genderHandler}
          >
            <option value='selectOption'>Select your gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>I choose not say</option>
          </select>
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

export default SignUp;
