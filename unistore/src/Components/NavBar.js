import React, { Component } from 'react';
import UniLogo from '../img/Wlogo.jpg';
import { Tabs, Tab } from 'material-ui/Tabs';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
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
      </nav>
    )
  }
}

export default NavBar;