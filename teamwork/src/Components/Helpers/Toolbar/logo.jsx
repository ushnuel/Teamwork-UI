import React from 'react';
import { Link } from 'react-router-dom';
import './toolbar.css';

const logo = () => (
  <div className='tm-logo'>
    <Link to='/'>
      Team
      <span className='tm-work'>WORK</span>
    </Link>
  </div>
);

export default logo;
