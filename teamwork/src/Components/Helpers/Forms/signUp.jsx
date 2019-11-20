import React from 'react';

const signUpForm = ({
  Onsubmit,
  InputFieldHandler,
  onChange,
  email,
  firstname,
  lastname,
  password,
  gender,
  address,
  jobRole,
  department,
  submitText,
}) => (
  <form className='tm-form' onSubmit={Onsubmit}>
    <label htmlFor='email'>
      Email Address <span>*</span>
    </label>
    <input
      type='email'
      name='email'
      id='email'
      required
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={email}
    />
    <small>Email address is required</small>

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
    <small>Password field must not be empty</small>

    <label htmlFor='jobrole'>
      Job Role <span>*</span>
    </label>
    <input
      type='text'
      name='jobRole'
      id='jobrole'
      required
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={jobRole}
    />
    <small>You must indicate if employee is an admin or not</small>
    <label htmlFor='firstname'>First Name</label>
    <input
      type='text'
      id='firstname'
      name='firstname'
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={firstname}
    />
    <label htmlFor='lastname'>Last Name</label>
    <input
      type='text'
      id='lastname'
      name='lastname'
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={lastname}
    />
    <label htmlFor='address'>Address</label>
    <input
      type='text'
      id='address'
      name='address'
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={address}
    />
    <label htmlFor='firstname'>Department</label>
    <input
      type='text'
      id='department'
      name='department'
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={department}
    />
    <label htmlFor='gender'>Gender</label>
    <select
      name='gender'
      id='gender'
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={gender}
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
);

export default signUpForm;
