import React from 'react';

const errorPage = ({ error }) => (
  <section className='tm-error-info'>
    <h1>An Error Occurred</h1>
    <h4>We encounted the following error</h4>
    <p className='tm-err-msg'>{error}</p>
    <h5>
      <span className='tm-color-word'>Hint: </span>
      Make sure you are logged in
    </h5>
  </section>
);
export default errorPage;
