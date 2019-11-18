import React from 'react';
import Button from '../Components/Helpers/Button/button';

const articleCard = ({ title, article, author, id }) => (
  <div className='tm-card'>
    <div className='tm-article-title'>
      <h2>{title}</h2>
    </div>
    <div className='tm-article-content'>{article}</div>
    <div className='tm-article-read-more'>
      {author}
      <a href={`/articles/${id}`}>
        <Button writeup='Read More' classname='tm-btn-success' />
      </a>
    </div>
  </div>
);

export default articleCard;
