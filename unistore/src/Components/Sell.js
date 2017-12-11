import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptInput: '',
            priceInput: '',
            classInput: '',
            photoInput: '',
            authorInput: ''
        }
    }

    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
    }

    handleSell(event) {
        event.preventDefault();
        if(this.state.deptInput === '' || this.state.classInput === '' || this.state.priceInput === '') {
            return null;
        }
        this.dbRef = firebase.database().ref();
        this.dbRef.on('value', (snapshot) => {
            this.setState({ db: snapshot.val() })
        });

        let newItem = {
            department: this.state.deptInput,
            class: this.state.classInput,
            author: this.state.authorInput,
            price: this.state.priceInput,
            sellerName: this.props.user.displayName,
            photoUrl: this.state.photoInput,
            time: firebase.database.ServerValue.TIMESTAMP
        }

        this.dbRef.child('items').child(this.state.classInput).push(newItem)
            .catch(error => console.log(error));
        alert("You have successfully listed an item for purchase!");
    }

    render() {
        let classes;

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
                                <select id='department' onChange={this.handleChange} name="deptInput" >
                                    <optgroup label="Departments">
                                        <option value="select">Select Department</option>
                                        <option value="Math">Math</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Physics">Physics</option>
                                    </optgroup>
                                </select>
                                <select id="course" onChange={this.handleChange} name="classInput">
                                    {classes}
                                </select>
                            </fieldset>
                            <fieldset>
                                <legend><span className="number">2</span> Book Info</legend>
                                <Input type="text"  onChange={this.handleChange} name="authorInput" placeholder="Author *" />
                                <Input type="text"  onChange={this.handleChange} name="priceInput" placeholder="Price *" />
                                <Input type="photo" onChange={this.handleChange} name="photoInput" placeholder="Upload Picture" />
                            </fieldset>
                            <input type="button" onClick={(event) => this.handleSell(event)} value="Post" />
                            <Link to="/"><Input type="button" value="Cancel" /></Link>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Sell;