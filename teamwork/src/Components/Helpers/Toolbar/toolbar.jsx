import React from 'react';
import { Logo, Harmburger } from '.';

const toolbar = ({ openSideDrawer }) => (
  <div className='tm-toolbar'>
    <Logo />
    <Harmburger openSideDrawer={openSideDrawer} />
  </div>
);

export default toolbar;
