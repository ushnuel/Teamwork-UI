import React from 'react';

const gifForm = ({
  onSubmit,
  InputFieldHandler,
  titleChange,
  imageChange,
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
      onChange={titleChange}
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
      name='image'
      onBlur={InputFieldHandler}
      onChange={imageChange}
    />
    <small>You must upload an image/gif</small>
    {image}
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
