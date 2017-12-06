import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Alert } from 'reactstrap';
import Footer from './Footer.js';


class Buy extends Component {
    render() {
        return (
            <div>
            <NavBar/>
            <div id="sell" className="container">
            <div class="form-style-5">
            <h1>Search Book at UniStore</h1>
            <br/>
            <form>
            <fieldset>
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
                <input type="text" name="field3" placeholder="Max Price *"/>
            </fieldset>
            <input type="button" value="Search" />
            <input type="button" value="Cancel" />
            </form>
            </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

export default Buy;