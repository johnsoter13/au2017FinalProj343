import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app'
import BuyList from './RenderItems.js'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// This component handles the buy function of the application
// It searches for books using the parameters given by the user
// If there are matching books they will be listed and available to buy
class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptInput: '',
            priceInput: '',
            classInput: '',
            hasSearched: false,
            listings: [],
            maxPrice: ''
        }
    }

    // Changes the state corresponding to the input 
    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
    }

    // Finds the right books that match the user's parameters and 
    // orders them by price
    handleSearch(event) {
        event.preventDefault();
        if(this.state.deptInput === '' || this.state.classInput === '') {
            return null;
        }
        this.setState({
            hasSearched: true,
            maxPrice: this.state.priceInput
        });

        this.dbRef = firebase.database().ref();
        this.dbRef.on('value', (snapshot) => {
            this.setState({ db: snapshot.val() })
        });

        this.listingsRef = this.dbRef.child('items').child(this.state.classInput).orderByChild('price')
        this.listingsRef.on('value', (snapshot) => {
            this.setState({ listings: snapshot.val() })
        });
    }

    // Handles the buying of the item 
    // Deletes from the seller's database and pushes it to the buyer's
    handleBuy = (item) => {
        let boughtItem;

        this.dbRef.child('items').child(item.class).child(item.id).on('value', (snapshot) => {
            boughtItem = snapshot.val();
        });
        alert("You have successfully bought a " + boughtItem.class + " book for $" + boughtItem.price);
        this.dbRef.child('users').child(this.props.user.displayName).child("bought_items").push(boughtItem);
        this.dbRef.child('items').child(item.class).child(item.id).remove();
    }

    render() {
        let content; let classes;
        if (this.state.deptInput === '') {
            classes = <optgroup label="Select a Department!">
            </optgroup>
        }
        else if (this.state.deptInput === 'Math') {
            classes = <optgroup label="Mathematics">
                <option value="select">Select Course</option>
                <option value="math120">Math120</option>
                <option value="math124">Math124</option>
                <option value="math125">Math125</option>
                <option value="math126">Math126</option>
                <option value="math307">Math307</option>
                <option value="math308">Math308</option>
                <option value="math328">Math328</option>
                <option value="other">Other</option>
            </optgroup>
        }
        else if (this.state.deptInput === 'Chemistry') {
            classes = <optgroup label="Chemistry">
                <option value="select">Select Course</option>
                <option value="Chem110">Chem110</option>
                <option value="Chem120">Chem120</option>
                <option value="Chem142">Chem142</option>
                <option value="Chem143">Chem143</option>
                <option value="Chem152">Chem152</option>
                <option value="Chem153">Chem153</option>
                <option value="Chem155">Chem155</option>
                <option value="other">Other</option>
            </optgroup>
        }
        else {
            classes = <optgroup label="Physics">
                <option value="select">Select Course</option>
                <option value="Phys121">Phys121</option>
                <option value="Phys122">Phys122</option>
                <option value="Phys123">Phys123</option>
                <option value="other">Other</option>
            </optgroup>
        }

        // If a search was made, the app renders the listings
        if (this.state.hasSearched) {
            content = (
                <BuyList
                    price={this.state.maxPrice}
                    listings={this.state.listings}
                    handleBuyCallback={(item) => this.handleBuy(item)}
                />
            )
        }
        else {
            content = (
                <div id="sell" className="container">
                    <div className="form-style-5">
                        <h1>Search Book at UniStore</h1>
                        <br />
                        <Form>
                            <fieldset>
                                <legend><span className="number">1</span> Course Info</legend>
                                <select id='department' aria-label="department dropdown" onChange={this.handleChange} name="deptInput" >
                                    <optgroup label="Departments">
                                        <option value="select">Select Department</option>
                                        <option value="Math">Math</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Physics">Physics</option>
                                    </optgroup>
                                </select>
                                <select id="course" aria-label="course dropdown" onChange={this.handleChange} name="classInput">
                                    {classes}
                                </select>
                            </fieldset>
                            <fieldset>
                                <Input aria-label="price input" type="text" name="priceInput" onChange={this.handleChange} placeholder="Max Price *" />
                            </fieldset>
                            <Input type="button" role="button" aria-label="search button" onClick={(event) => this.handleSearch(event)} value="Search" />
                            <Link to="/"><Input role="button" aria-label="cancel button" type="button" value="Cancel" /></Link>
                        </Form>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <NavBar />
                {content}
                <Footer />
            </div>
        )
    }
}

export default Buy;