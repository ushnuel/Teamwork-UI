import React from 'react';
import NavigationItems from '../Navigation/navigationItems';
import { Logo, Harmburger } from '.';

const toolbar = ({ openSideDrawer }) => (
  <div className='tm-toolbar'>
    <Logo />
    <Harmburger openSideDrawer={openSideDrawer} />
    <div className='tm-navigation-desktop'>
      <NavigationItems />
    </div>
  </div>
);

export default toolbar;
