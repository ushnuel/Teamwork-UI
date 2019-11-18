import React from 'react';
import './backdrop.css';

const backDrop = ({ isOpen, close }) => {
  return isOpen ? <div className='tm-backdrop' onClick={close} /> : null;
};

export default backDrop;
