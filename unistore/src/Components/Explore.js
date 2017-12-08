import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BuyList from './RenderItems.js'

class Explore extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let items = {}
        this.values = Object.values(this.props.listings);
        for(let i = 0; i < this.values.length; i++) {
            this.listingValue = Object.values(this.values[i]);
            this.listingId = Object.keys(this.values[i]);
            for(let j = 0; j < this.listingId.length; j++) {
                items[this.listingId[j]] = this.listingValue[j]
            }
        }
        return (
            <div>
                <NavBar />

                    <BuyList listings={items} />

                <Footer />
            </div>
        )
    }
}

export default Explore;


