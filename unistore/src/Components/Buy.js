import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app'
import BuyList from './RenderItems.js'

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

    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
    }

    handleSearch(event) {
        event.preventDefault();
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

    handleBuy = (item) => {
        this.dbRef.child('items').child(item.class).child(item.id).remove()
    }

    render() {
        let content;

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
                            <Input type="text" name="deptInput" onChange={this.handleChange} placeholder="Department *" />
                            <select id="course" onChange={this.handleChange} name="classInput">
                                <optgroup label="Mathematics">
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
                            </select>
                        </fieldset>
                        <fieldset>
                            <Input type="text" name="priceInput" onChange={this.handleChange} placeholder="Max Price *" />
                        </fieldset>
                        <Input type="button" onClick={(event) => this.handleSearch(event)} value="Search" />
                        <Input type="button" value="Cancel" />
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