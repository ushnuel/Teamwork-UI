import React from 'react';

const articleCommentForm = ({
  submitText,
  onSubmit,
  value,
  Onchange,
  Onblur,
}) => (
  <section className='tm-comment-article'>
    <form onSubmit={onSubmit} className='tm-form'>
      <textarea
        name='comment'
        id='comment'
        cols='30'
        required
        rows='10'
        value={value}
        onChange={Onchange}
        onBlur={Onblur}
      ></textarea>
      <small>Comment must not be empty</small>
      <button
        type='submit'
        id='button'
        className='tm-btn-primary tm-read-more'
        disabled={true}
      >
        {submitText}
      </button>
    </form>
  </section>
);

export default articleCommentForm;
