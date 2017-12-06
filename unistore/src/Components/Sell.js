import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';


class Sell extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <div id="sell" className="container">
            <div class="form-style-5">
            <h1>Post To UniStore</h1>
            <br/>
            <form>
            <fieldset>
                <legend><span class="number">1</span> Course Info</legend>
                <input type="text" name="field1" placeholder="Department *"/>
                <select id="course" name="field2">
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
                <legend><span class="number">2</span> Book Info</legend>
                <input type="text" name="field3" placeholder="Price *"/>
                <input type="photo" name="field4" placeholder="Upload Picture"/>
            </fieldset>
            <input type="button" value="Post" />
            <input type="button" value="Cancel" />
            </form>
            </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

export default Sell;