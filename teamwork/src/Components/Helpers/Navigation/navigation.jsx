import React from 'react';
import { Link } from 'react-router-dom';

const navigation = ({ children, link }) => (
  <li className='tm-navigation'>
    <Link to={link}>{children}</Link>
  </li>
);

export default navigation;
