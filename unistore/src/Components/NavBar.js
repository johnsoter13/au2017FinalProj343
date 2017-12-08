import React, { Component } from 'react';
<<<<<<< HEAD
import Logo from '../img/unistore-logo.png';
=======
>>>>>>> 2870689afaf259a73bf9ab64f68bcedb4b0a21cc
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Search from 'material-ui/svg-icons/action/search';
import { StyleSheet, css } from 'aphrodite';


// The Navigation bar component allows the user to navigate between different pages in the application

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      // <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <IconButton onClick={() => this.setState({ open: !this.state.open })}>
      //     <Search className={css(styles.white)}/>
      //   </IconButton>
      //   {/* <img id="unilogo" className="rounded-circle img-fluid" src={UniLogo} aria-label="University Logo"/> */}
      //   <a className="navbar-brand" href="/">
      //     <Link to="/" id="logo"><h1>Uni<span>Store</span></h1></Link>
      //     <h4>University of Washington</h4>
      //   </a>
      //   <button aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarToggler01" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
      //   <div className="navbar-collapse collapse" id="navbarToggler01">
      //     <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      //       <li className="nav-item">
      //         <Link className="nav-link" to="/">HOME</Link>
      //         <Link className="nav-link" to="/Explore">EXPLORE</Link>
      //         <Link className="nav-link" to="#">CONTACT</Link>
      //         <Link className="nav-link" to="#">ABOUT</Link>
      //       </li>
      //     </ul>
      //   </div>
      //   <Drawer open={this.state.open}>
      //     <IconButton onClick={() => this.setState({ open: !this.state.open })}>
      //       <Search/>
      //     </IconButton>
      //     <MenuItem>Menu Item</MenuItem>
      //     <MenuItem>Menu Item 2</MenuItem>
      //   </Drawer>
      // </nav>


      <nav id="navbar" className="navbar navbar-expand-sm navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand">
            {/* <Link to="/" id="logo"><h1>Uni<span>Store</span></h1></Link> */}
            <Link to="/"><img id="logo" src={Logo} aria-label="UniStore Logo"/></Link>
          </a>

        <div className="collapse navbar-collapse" id="nav-content">   
          <ul className="navbar-nav ml-auto">
            <li className="nav-item home">
              <Link id="navlink" className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item explore">
              <Link id="navlink" className="nav-link" to="/Explore">EXPLORE</Link>
            </li>
            <li className="nav-item about">
              <Link id="navlink" className="nav-link" to="#">ABOUT</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const styles = StyleSheet.create({
  white: {
    color: "white"
  }
});

export default NavBar;