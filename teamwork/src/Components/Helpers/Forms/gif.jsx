import React from 'react';

const gifForm = ({
  onSubmit,
  InputFieldHandler,
  onChange,
  title,
  submitText,
  image,
}) => (
  <form
    id='gifForm'
    className='tm-form'
    onSubmit={onSubmit}
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
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={title}
    />
    <small>Please include gif title</small>

    <label htmlFor='image'>
      Image/Gif <span>*</span>
    </label>
    <input
      type='file'
      required
      id='image'
      value={image}
      name='image'
      onBlur={InputFieldHandler}
      onChange={onChange}
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
);

export default gifForm;
