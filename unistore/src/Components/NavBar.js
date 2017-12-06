import React, { Component } from 'react';
import UniLogo from '../img/Wlogo.jpg';

    class NavBar extends Component {
      render() {
        return (
          <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img id="unilogo" class="rounded-circle img-fluid" src={UniLogo} aria="University Logo"/>
          <a className="navbar-brand" href="/">
            <h1>Uni<span>Store</span></h1>
            <h4>University of Washington</h4>
          </a>
          <button aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarToggler01" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
          <div className="navbar-collapse collapse" id="navbarToggler01">
             <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                   <a className="nav-link" href="/">HOME</a>
                   <a className="nav-link" href="/Explore">EXPLORE</a>
                   <a className="nav-link" href="#">CONTACT</a>
                   <a className="nav-link" href="#">ABOUT</a>
                </li>
             </ul>
          </div>
       </nav>
        )
      }
    }

export default NavBar;