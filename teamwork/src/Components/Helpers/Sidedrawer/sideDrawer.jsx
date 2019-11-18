import React from 'react';
import Backdrop from '../Backdrop/backdrop';
import Logo from '../Toolbar/logo';
import NavigationItems from '../Navigation/navigationItems';

import './sidedrawer.css';

const sideDrawer = ({ onClick, sideDrawerIsClose }) => {
  let classes = 'tm-sideDrawer tm-close';
  if (sideDrawerIsClose) {
    classes = 'tm-sideDrawer tm-open';
  }
  return (
    <>
      <Backdrop isOpen={sideDrawerIsClose} close={onClick} />
      <div className={classes}>
        <Logo />
        <hr className='tm-sidedrawer-hr' />
        <NavigationItems />
      </div>
    </>
  );
};

export default sideDrawer;
