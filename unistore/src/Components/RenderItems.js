import React, { Component } from 'react';
import moment from 'moment';
import './../css/renderedItems.css'
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { StyleSheet, css } from 'aphrodite';
import textbook from '../img/textbook.png'

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
            <div className={css(styles.listings)}>{this.listingArray}</div>
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
            <Card className={css(styles.card)}>
                <CardMedia><img src={textbook} alt={"photo of " + this.props.listing.class + " book"}></img></CardMedia>
                <CardTitle title={"Class: " + this.props.listing.class} />
                <CardText>
                    <p> {"Price: $" + this.props.listing.price} </p>
                    <p> {"Posted: " + date} </p>
                </CardText>
                <RaisedButton className={css(styles.button)} primary={true} id={this.props.listing.id} key={this.props.listing.id} onClick={(event) => this.handleBuy(event)} value="buy">Buy</RaisedButton>
            </Card>
        )
    }
}

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