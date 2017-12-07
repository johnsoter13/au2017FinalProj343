import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Explore extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div id="content" className="jumbotron">
                    <h1>Need to add the content....</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Explore;


