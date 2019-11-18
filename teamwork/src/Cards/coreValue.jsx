import React from 'react';
import './cards.css';

const coreValue = ({ children, title, icon }) => (
  <div className='tm-value-card'>
    <div className='tm-value'>
      <h1>{title}</h1>
      <img src={icon} alt='core value' className='tm-core-value-image' />
    </div>
    <div className='tm-value-writeup'>{children}</div>
  </div>
);

export default coreValue;
