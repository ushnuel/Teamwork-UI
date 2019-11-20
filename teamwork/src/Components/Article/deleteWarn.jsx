import React from 'react';

const deleteCard = ({ Onclick, id, text }) => (
  <section className='tm-article-delete'>
    <h3>This action cannot be undone. Do you wish to continue?</h3>
    <div className='tm-home-buttons'>
      <a href={`/articles/${id}`}>
        <button className='tm-btn-info tm-read-more'>Cancel</button>
      </a>
      <button className='tm-btn-danger tm-read-more' onClick={Onclick}>
        {text}
      </button>
    </div>
  </section>
);

export default deleteCard;
