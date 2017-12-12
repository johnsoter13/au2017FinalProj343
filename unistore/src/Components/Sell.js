import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, Input, } from 'reactstrap';
import Footer from './Footer.js';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app'
import { Link } from 'react-router-dom';

// This component renders the sell page where the user can post the textbooks that they wish to sell
// in the application. It allows the user to input the department, class, author, price and picture
// for the book. 
class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptInput: '',
            priceInput: '',
            classInput: '',
            photoInput: '',
            titleInput: ''
        }
    }

    // Changes the state with the changes in the corresponding input
    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
    }

    // Handles the selling of the items
    // Adds item to database and notifies user that they have listed an item for purchase
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
            title: this.state.titleInput,
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

        //Math classes
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

        //Chemistry classes
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

        //Physics classes
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
                                <select id='department' onChange={this.handleChange} name="deptInput" aria-label="department dropdown">
                                    <optgroup label="Departments">
                                        <option value="select">Select Department</option>
                                        <option value="Math">Math</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Physics">Physics</option>
                                    </optgroup>
                                </select>
                                <select id="course" onChange={this.handleChange} name="classInput" aria-label="select course dropdown">
                                    {classes}
                                </select>
                            </fieldset>
                            <fieldset>
                                <legend><span className="number">2</span> Book Info</legend>
                                <Input type="text" aria-label="title input" onChange={this.handleChange} name="titleInput" placeholder="Title *" />
                                <Input type="text" aria-label="price input"  onChange={this.handleChange} name="priceInput" placeholder="Price *" />
                                <Input type="photo" aria-label="picture input" onChange={this.handleChange} name="photoInput" placeholder="Upload Picture" />
                            </fieldset>
                            <input type="button" aria-label="sell Button" onClick={(event) => this.handleSell(event)} value="Post" />
                            <Link to="/"><Input role="button" aria-label="cancel button" type="button" value="Cancel" /></Link>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Sell;