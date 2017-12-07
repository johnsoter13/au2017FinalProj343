import React, { Component } from 'react';

class BuyList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.listings == null) {
            return null
        }

        let listingId = Object.keys(this.props.listings);
        let listingArray = listingId.map((id) => {
            let listing = this.props.listings[id];
            console.log(listing.price);
            console.log(this.props.price);
            listing.id = id;
            if(listing.price < this.props.price) {
            return <Listing
                        key={id}
                        listing={listing}
                    />
            }
        })
        return (
            <div>{listingArray}</div>
        )
    }
}

class Listing extends Component {
    constructor(props) {
        super(props);
    }
    // listings need to be styled
    render() {
        return(
            <div>
                <p> {this.props.listing.price} </p>
            </div>
        )
    }
}

export default BuyList;