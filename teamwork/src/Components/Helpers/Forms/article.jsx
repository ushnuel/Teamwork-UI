import React from 'react';

const articleForm = ({
  onSubmit,
  title,
  onChange,
  InputFieldHandler,
  article,
  submitText,
}) => (
  <form className='tm-form' onSubmit={onSubmit}>
    <label htmlFor='title'>
      Article Title <span>*</span>
    </label>
    <input
      type='text'
      id='title'
      required
      name='title'
      onBlur={InputFieldHandler}
      onChange={onChange}
      value={title}
    />
    <small>Please include the title of the article</small>

    <label htmlFor='article'>
      Article <span>*</span>
    </label>
    <textarea
      name='article'
      id='article'
      cols='30'
      rows='10'
      value={article}
      onChange={onChange}
      onBlur={InputFieldHandler}
    ></textarea>
    <small>Article field must not be empty</small>

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
export default articleForm;
