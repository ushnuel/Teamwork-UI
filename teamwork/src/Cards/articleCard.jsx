import React from 'react';
import removeStrings from './utils';

const articleCard = ({ title, article, id, Onclick }) => (
  <div className='tm-card'>
    <div className='tm-article-title'>
      <h4>{title}</h4>
    </div>
    <div className='tm-article-content'>{removeStrings(article) + '.....'}</div>
    <div className='tm-article-read-more'>
      <button className='tm-btn-primary tm-read-more' onClick={Onclick}>
        Read More
      </button>
    </div>
  </div>
);

export default articleCard;
