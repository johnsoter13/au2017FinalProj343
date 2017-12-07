import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app'

class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptInput: '',
            priceInput: '',
            classInput: '',
            photoInput: ''
        }
    }

    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
        console.log(event.target.value);
    }

    handleSell(event) {
        event.preventDefault();

        this.dbRef = firebase.database().ref();
        this.dbRef.on('value', (snapshot) => {
            this.setState({ db: snapshot.val() })
        });

        let newItem = {
            department: this.state.deptInput,
            class: this.state.classInput,
            price: this.state.priceInput,
            sellerName: this.props.user.displayName,
            photoUrl: this.state.photoInput,
            time: firebase.database.ServerValue.TIMESTAMP
        }

        this.dbRef.child('items').child(this.state.classInput).push(newItem)
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <NavBar />
                <div id="sell" className="container">
                    <div className="form-style-5">
                        <h1>Post To UniStore</h1>
                        <br />
                        <Form>
                            <fieldset>
                                <legend><span className="number">1</span> Course Info</legend>
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
                                <legend><span className="number">2</span> Book Info</legend>
                                <Input type="text" name="priceInput" onChange={this.handleChange} placeholder="Price *" />
                                <Input type="photo" onChange={this.handleChange} name="photoInput" placeholder="Upload Picture" />
                            </fieldset>
                            <input type="button" onClick={(event) => this.handleSell(event)} value="Post" />
                            <input type="button" value="Cancel" />
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Sell;