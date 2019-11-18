import React, { Component } from 'react';
import Toolbar from '../../Components/Helpers/Toolbar/toolbar';
import Footer from '../../Components/Footer/footer';
import SideDrawer from '../../Components/Helpers/Sidedrawer/sideDrawer';
import './layout.css';

class Layout extends Component {
  state = {
    sideDrawerIsOpen: false,
  };
  openSideDrawerHandler = () => {
    this.setState({ sideDrawerIsOpen: true });
  };
  closeSideDrawerHandler = () => {
    this.setState({ sideDrawerIsOpen: false });
  };
  render() {
    return (
      <>
        <header>
          <Toolbar openSideDrawer={this.openSideDrawerHandler} />
          <SideDrawer
            onClick={this.closeSideDrawerHandler}
            sideDrawerIsClose={this.state.sideDrawerIsOpen}
          />
        </header>
        <main className='tm-main'>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
