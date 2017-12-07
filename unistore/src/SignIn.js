import React, { Component } from 'react'; //import React Component
import { Form, FormGroup, Label, Input, Button, Alert, FormFeedback } from 'reactstrap';
import SignUpForm from './SignUp.js'

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }; //initialize state
    }

    handleSignUpInstead() {
        this.props.signUpInsteadCallback(true);
    }

    handleSignIn(event) {
        event.preventDefault(); //don't submit
        this.props.signInCallback(this.state.email, this.state.password);
    }

    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
    }

    render() {
        return (
            <Form>
                {/* email */}
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        value={this.state.email}
                        onChange={this.handleChange}
                        id="email"
                        type="email"
                        name="email"
                    />
                </FormGroup>

                {/* password */}
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        value={this.state.password}
                        onChange={this.handleChange}
                        id="password"
                        type="password"
                        name="password"
                    />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={(e) => this.handleSignIn(e)} >
                        Sign-in
                    </Button>
                    <span> Don't have an account? Sign up <a href="# "onClick={() => this.handleSignUpInstead()}>Here</a></span>
                </FormGroup>
            </Form>
        )
    }

}

export default SignInForm