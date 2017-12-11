import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';
import BuyList from './RenderItems.js'
import { StyleSheet, css } from 'aphrodite';

// This component displays content of the about page of the application
class About extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                    <div className="container">
                        <h2>About Us</h2>
                        <p>UniStore is an online marketplace for books founded in 2017 as we saw the need for
                           a complete web application that could be helpful for students to exchange books of
                           their university courses. Our website provides safe and easy way to resell books to
                           other students. We believe that every student should have access to books at affordable
                           prices and money should not be a constraint to purchase books.                           
                        </p>
                        
                        <br/>
                        
                        <p>At present, 500,000+ students around the USA from 500+ universities are using Unistore.
                           Every semester, thousands of books from almost every major are sold through our website.
                           We hope to continue our effective and successful services in the future so everyone can
                           afford college books.
                        </p>
                    </div>
                <Footer />
            </div>
        )
    }
}


export default About;