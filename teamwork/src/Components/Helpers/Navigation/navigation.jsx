import React from 'react';

const navigation = ({ children, link }) => (
  <li className='tm-navigation'>
    <a href={link}>{children}</a>
  </li>
);

export default navigation;
