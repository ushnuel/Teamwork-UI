import React from 'react';
import dateFormat from 'dateformat';
import './index.css';

const articleDetail = ({ article }) => (
  <div className='tm-article-details'>
    <div className='tm-details'>
      <h3>Date Created</h3>
      <p>{dateFormat(article.data.createdon, 'mmmm dS, yyyy')}</p>
    </div>
    <div className='tm-details'>
      <h3>Author </h3>
      <p>Emmanuel Chinazom</p>
    </div>
  </div>
);

export default articleDetail;
