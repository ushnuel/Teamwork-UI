import React from 'react';

const signInForm = ({
  onSubmit,
  InputFieldHandler,
  email,
  password,
  submitText,
  onChange,
}) => (
  <form className='tm-form' onSubmit={onSubmit}>
    <label htmlFor='email'>
      Email Address <span>*</span>
    </label>
    <input
      type='email'
      id='email'
      name='email'
      required
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={email}
    />
    <small>Please provide a valid email</small>

    <label htmlFor='password'>
      Password <span>*</span>
    </label>
    <input
      type='password'
      id='password'
      name='password'
      value={password}
      required
      onChange={onChange}
      onBlur={InputFieldHandler}
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
);

export default signInForm;
