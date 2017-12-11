import React, { Component } from 'react';
import moment from 'moment';
import './../css/renderedItems.css'
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { StyleSheet, css } from 'aphrodite';
import textbook from '../img/textbook.png'

// this creates a list of items to display
class BuyList extends Component {
    constructor(props) {
        super(props);
    }

    //callback for buying an item which is handled in the Buy class
    handleBuyCallback = (item) => {
        this.props.handleBuyCallback(item);
    }

    //this is rendered if a user makes a search and theres no content there to display
    render() {
        if (this.props.listings == null) {
            return <div> <p> No content to show. Try changing your search! </p> </div>
        }

        // this maps the ids of the object to an array that gets passed to the Listing class which renders the list item
        this.listingId = Object.keys(this.props.listings);
        this.listingArray = this.listingId.map((id) => {
            let listing = this.props.listings[id];
            listing.id = id;
            // this will only allow posts under the max price entered by the user to be displayed
            // if the user puts no max price all items will be displayed
            if (Number(listing.price) < Number(this.props.price) || this.props.price == null || this.props.price == '') {
                return <Listing
                    key={id}
                    listing={listing}
                    handleBuyCallback={(item) => this.handleBuyCallback(item)}
                />
            }
        })
        return (
            <div className={css(styles.listings)}>{this.listingArray}</div>
        )
    }
}

// this class creates individual items to be rendered by the BuyList
class Listing extends Component {
    constructor(props) {
        super(props);
    }
    // when a user clicks on buy it creates an item to be passed up the callback chain.
    // you need more than one value to remove from firebase so creating one object
    // and passing that as a variable works nicely
    handleBuy = (event) => {
        event.preventDefault();
        let item = {
            id: this.props.listing.id,
            class: this.props.listing.class
        }
        this.props.handleBuyCallback(item)
    }

    // this is where a post gets rendered
    render() {
        // displays time from when post was created
        let date = (moment(this.props.listing.time)).fromNow();
        let author = this.props.listing.author;
        // since database and moment servers aren't in synch, time of recent post could be in the future
        // even though its not. This stops that from happening.
        if (date === 'in a few seconds') {
            date = 'Just now';
        }
        if (author == null) {
            author = 'Not listed'
        }
        return (
            <Card className={css(styles.card)}>
                <CardMedia><img src={textbook} alt={"photo of " + this.props.listing.class + " book"}></img></CardMedia>
                <CardTitle title={"Class: " + this.props.listing.class} />
                <CardText>
                    <p> {"By: " + author} </p>
                    <p> {"Price: $" + this.props.listing.price} </p>
                    <p> {"Posted: " + date} </p>
                </CardText>
                <RaisedButton className={css(styles.button)} primary={true} id={this.props.listing.id} key={this.props.listing.id} onClick={(event) => this.handleBuy(event)} value="buy">Buy</RaisedButton>
            </Card>
        )
    }
}
// aphrodite styles
const styles = StyleSheet.create({
    card: {
        width: "250px",
        margin: "1em",
        textAlign: "center"
    },

    button: {
        marginBottom: "1em"
    },

    listings: {
        display: "flex",
        width: "100%",
        flexFlow: "wrap"
    }
  });

export default BuyList;