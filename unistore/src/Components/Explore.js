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
        console.log(this.props.listings);
            
        this.values = Object.values(this.props.listings);
        console.log(this.values);
        

        // this.listingArray = this.listingId.map((id) => {
        //     let listing = this.props.listings[id];
        //     listing.id = id;
        //     // fix item selecting/string equality
        //     if (listing.price < this.props.price) {
        //         return <Listing
        //             key={id}
        //             listing={listing}
        //             handleBuyCallback={(item) => this.handleBuyCallback(item)}
        //         />
        //     }
        // })
        return (
            <div>
                <NavBar />
                <div id="content" className="jumbotron">
                    <BuyList listings={this.values} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Explore;


