import React, { Component } from 'react'; //import React Component
import { Form, FormGroup} from 'reactstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
            <MuiThemeProvider>
                <Form>
                    {/* email */}
                    <FormGroup>
                        <TextField
                            value={this.state.email}
                            onChange={this.handleChange}
                            floatingLabelText="Email"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            name="email"
                        />
                    </FormGroup>

                    {/* password */}
                    <FormGroup>
                        <TextField
                            value={this.state.password}
                            onChange={this.handleChange}
                            floatingLabelText="Password"
                            floatingLabelFixed={true}
                            fullWidth={true}
                            name="password"
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <RaisedButton role="button" aria-label="sign in button" primary={true} onClick={(e) => this.handleSignIn(e)} >
                            Sign-in
                    </RaisedButton>
                        <p> Don't have an account? Sign up <a href="# " onClick={() => this.handleSignUpInstead()}>Here</a></p>
                    </FormGroup>
                </Form>
            </MuiThemeProvider>
        )
    }
}

export default SignInForm