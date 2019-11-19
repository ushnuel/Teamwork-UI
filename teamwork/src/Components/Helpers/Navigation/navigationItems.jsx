import React from 'react';
import Navigation from './navigation';
import './navigation.css';

const navigationItems = () => (
  <ul className='tm-navigation-items'>
    <Navigation link='/auth/create-user'>Sign up</Navigation>
    <Navigation link='/auth/signin'>Sign in</Navigation>
    <Navigation link='/articles'>Create Article</Navigation>
    <Navigation link='/gifs'>Post Gif</Navigation>
    <Navigation link='/feeds'>View Articles</Navigation>
  </ul>
);

export default navigationItems;
