import React, { Component } from 'react';
import Logo from '../img/unistore-logo.png';
import { Link } from 'react-router-dom';

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

      <nav id="navbar" className="navbar navbar-expand-sm navbar-light bg-light">

        <Link to="/"><img id="logo" src={Logo} aria-label="UniStore Logo" /></Link>
        <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav-content">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item home">
              <Link id="navlink" role="link" aria-label="Home link" className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item explore">
              <Link id="navlink" role="link" aria-label="explore link" className="nav-link" to="/Explore">EXPLORE</Link>
            </li>
            <li className="nav-item about">
              <Link id="navlink" role="link" aria-label="about link" className="nav-link" to="/About">ABOUT</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;