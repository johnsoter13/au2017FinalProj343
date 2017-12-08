import React, { Component } from 'react';
import moment from 'moment';
import './../css/renderedItems.css'
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';

class BuyList extends Component {
    constructor(props) {
        super(props);
    }

    handleBuyCallback = (item) => {
        this.props.handleBuyCallback(item);
    }



    render() {
        if (this.props.listings == null) {
            return null
        }
        this.listingId = Object.keys(this.props.listings);
        this.listingArray = this.listingId.map((id) => {
            let listing = this.props.listings[id];
            listing.id = id;
            // fix item selecting/string equality
            if (Number(listing.price) < Number(this.props.price) || this.props.price == null) {
                return <Listing
                    key={id}
                    listing={listing}
                    handleBuyCallback={(item) => this.handleBuyCallback(item)}
                />
            }
        })
        return (
            <div>{this.listingArray}</div>
        )
    }
}

class Listing extends Component {
    constructor(props) {
        super(props);
    }
    handleBuy = (event) => {
        event.preventDefault();
        let item = {
            id: this.props.listing.id,
            class: this.props.listing.class
        }
        this.props.handleBuyCallback(item)
    }

    // listings need to be styled
    render() {
        let date = (moment(this.props.listing.time)).fromNow();
        // since database and moment servers aren't in synch, time of recent post could be in the future
        // even though its not. This stops that from happening.
        if (date === 'in a few seconds') {
            date = 'Just now';
        }
        return (
            <section className="listing">
                <img src={this.props.listing.photoUrl} alt={"photo of " + this.props.listing.class + " book"}></img>
                <p> {"Class: " + this.props.listing.class} </p>
                <p> {"Price: " + this.props.listing.price} </p>
                <p> {"Posted: " + date} </p>
                <Input type="button" id={this.props.listing.id} key={this.props.listing.id} onClick={(event) => this.handleBuy(event)} value="buy" />
            </section>
        )
    }
}

export default BuyList;