import React, { Component } from 'react';
import UniLogo from '../img/Wlogo.jpg';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Search from 'material-ui/svg-icons/action/search';
import { StyleSheet, css } from 'aphrodite';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <IconButton onClick={() => this.setState({ open: !this.state.open })}>
          <Search className={css(styles.white)}/>
        </IconButton>
        {/* <img id="unilogo" className="rounded-circle img-fluid" src={UniLogo} aria-label="University Logo"/> */}
        <a className="navbar-brand" href="/">
          <Link to="/" id="logo"><h1>Uni<span>Store</span></h1></Link>
          <h4>University of Washington</h4>
        </a>
        <button aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarToggler01" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
        <div className="navbar-collapse collapse" id="navbarToggler01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
              <Link className="nav-link" to="/Explore">EXPLORE</Link>
              <Link className="nav-link" to="#">CONTACT</Link>
              <Link className="nav-link" to="#">ABOUT</Link>
            </li>
          </ul>
        </div>
        <Drawer open={this.state.open}>
          <IconButton onClick={() => this.setState({ open: !this.state.open })}>
            <Search/>
          </IconButton>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
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