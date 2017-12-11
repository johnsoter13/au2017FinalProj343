import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import firebase from  'firebase';
import CircularProgress from 'material-ui/CircularProgress';
import BuyList from './RenderItems.js'

// This component renders all the current listings that are in the database
class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    // Handles the buying by pushing the bought item to the current user
    // and removing it from the original owner
    handleBuy = (item) => {
        this.dbRef = firebase.database().ref();
        this.dbRef.on('value', (snapshot) => {
            this.setState({ db: snapshot.val() })
        });
        
        let boughtItem;

        this.dbRef.child('items').child(item.class).child(item.id).on('value', (snapshot) => {
            boughtItem = snapshot.val();
        });
        alert("You have successfully bought a " + boughtItem.class + " book for $" + boughtItem.price);
        this.dbRef.child('users').child(this.props.user.displayName).child("bought_items").push(boughtItem);
        this.dbRef.child('items').child(item.class).child(item.id).remove();
    }

    render() {
        let items = {}
        if (this.props.listings) {
            this.values = Object.values(this.props.listings);
            for (let i = 0; i < this.values.length; i++) {
                this.listingValue = Object.values(this.values[i]);
                this.listingId = Object.keys(this.values[i]);
                for (let j = 0; j < this.listingId.length; j++) {
                    items[this.listingId[j]] = this.listingValue[j]
                }
            }
        }

        return (
            <div>
                <NavBar />
                <div className="container">
                    {this.state.loading ? (<div><CircularProgress size={150} thickness={7} /></div>) :
                        (<BuyList listings={items}
                                  handleBuyCallback={(item) => this.handleBuy(item)} />)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Explore;


