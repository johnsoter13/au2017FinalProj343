import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';


class Explore extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div id="content" className="jumbotron">
                    <h1>Need to add the content....</h1>
                </div>
                <div class="nav-side-menu">
                    <div class="brand">Explore Books</div>
                    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                    <div class="menu-list">

                        <ul id="menu-content" class="menu-content collapse out">


                            <li data-toggle="collapse" data-target="#products" class="collapsed active">
                                <a href="#"><i class="fa fa-gift fa-lg"></i> UI Elements <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="products">
                                <li class="active"><a href="#">CSS3 Animation</a></li>
                            </ul>


                            <li data-toggle="collapse" data-target="#service" class="collapsed">
                                <a href="#"><i class="fa fa-globe fa-lg"></i> Services <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="service">
                                <li>New Service 1</li>
                                <li>New Service 2</li>
                                <li>New Service 3</li>
                            </ul>


                            <li data-toggle="collapse" data-target="#new" class="collapsed">
                                <a href="#"><i class="fa fa-car fa-lg"></i> New <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="new">
                                <li>New New 1</li>
                                <li>New New 2</li>
                                <li>New New 3</li>
                            </ul>


                            <li>
                                <a href="#">
                                    <i class="fa fa-user fa-lg"></i> Profile
                          </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="fa fa-users fa-lg"></i> Users
                          </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Explore;


