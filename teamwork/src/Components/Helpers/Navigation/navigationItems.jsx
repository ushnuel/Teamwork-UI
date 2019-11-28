import React from 'react';
import Navigation from './navigation';
import User from '../Utils/authorizeUser';
import './navigation.css';

let isLoggedIn = User.isLoggedIn();
const isAdmin = User.isAdmin();
const navigationItems = () => (
  <ul className='tm-navigation-items'>
    <div style={{ display: isAdmin }}>
      <Navigation link='/auth/create-user'>Create Employee</Navigation>
    </div>
    <Navigation link='/auth/signin'>Sign in</Navigation>
    <div className={isLoggedIn}>
      <Navigation link='/articles'>Create Article</Navigation>
      <Navigation link='/gifs'>Post Gif</Navigation>
      <Navigation link='/feeds'>View Articles</Navigation>
    </div>
  </ul>
);

export default navigationItems;
