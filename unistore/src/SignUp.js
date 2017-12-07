import React, { Component } from 'react'; //import React Component
import { Form, FormGroup, Label, Input, Button, Alert, FormFeedback } from 'reactstrap';
import { TextField, RaisedButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import noUserPic from './img/no-user-pic.png';
import './Sign.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      handle: undefined,
      avatar: undefined
    };
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSignUp(event) {
    event.preventDefault();
    // Sets avatar to be gravatar 
    let avatar = this.state.avatar || noUserPic;
    this.props.signUpCallback(this.state.email, this.state.password, this.state.handle, avatar);
  }

  handleSignIn(event) {
    event.preventDefault(); //don't submit
    this.props.signInCallback(this.state.email, this.state.password);
  }

  /**
   * A helper function to validate a value based on an object of validations
   * Second parameter has format e.g., 
   *    {required: true, minLength: 5, email: true}
   * (for required field, with min length of 5, and valid email)
   */
  validate(value, validations) {
    let errors = [];

    if (value !== undefined) { //check validations
      //handle required
      if (validations.required && value === '') {
        errors.push('Required field.');
      }

      //handle minLength
      if (validations.minLength && value.length < validations.minLength) {
        errors.push(`Must be at least ${validations.minLength} characters.`);
      }

      //handle email type
      if (validations.email) {
        let valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
        if (!valid) {
          errors.push('Not an email address.')
        }
      }
      return errors; //report the errors
    }
    return undefined; //no errors defined (because no value defined!)
  }


  /* SignUpForm#render() */
  render() {
    let emailErrors = this.validate(this.state.email, { required: true, email: true });
    let passwordErrors = this.validate(this.state.password, { required: true, minLength: 6 })
    let handleErrors = this.validate(this.state.handle, { required: true });

    let emailValid = (emailErrors && emailErrors.length === 0);
    let passwordValid = (passwordErrors && passwordErrors.length === 0);
    let handleValid = (handleErrors && handleErrors.length === 0);

    function signupValid() {
      return !emailValid || !passwordValid || !handleValid;
    }

    return (
      <MuiThemeProvider>
        <Form>
          {/* email */}
          <FormGroup>
            <TextField
              hintText="a@a.com"
              floatingLabelText="Email"
              floatingLabelFixed={true}
              value={this.state.email}
              onChange={(event) => this.handleChange(event)}
              fullWidth={true}
              valid={emailValid}
              name="email"
            />
            {emailErrors && !emailValid &&
              (emailErrors.map((feedback, id) => {
                return <FormFeedback className={css(styles.error)} key={id}>{feedback}</FormFeedback>;
              }))
            }

          </FormGroup>

          {/* password */}
          <FormGroup>
            <TextField
              floatingLabelText="Password"
              floatingLabelFixed={true}
              value={this.state.password}
              onChange={(event) => this.handleChange(event)}
              fullWidth={true}
              valid={passwordValid}
              name="password"
              type="password"
            />
            {passwordErrors && !passwordValid &&
              (passwordErrors.map((feedback, id) => {
                return <FormFeedback className={css(styles.error)} key={id}>{feedback}</FormFeedback>
              }))
            }
          </FormGroup>

          {/* handle */}
          <FormGroup>
            <TextField
              floatingLabelText="Handle"
              floatingLabelFixed={true}
              value={this.state.handle}
              onChange={(event) => this.handleChange(event)}
              fullWidth={true}
              valid={handleValid}
              name="handle"
            />
            {handleErrors && !handleValid &&
              (handleErrors.map((feedback, id) => {
                return <FormFeedback className={css(styles.error)} key={id}>{feedback}</FormFeedback>
              }))
            }
          </FormGroup>

          {/* avatar */}
          <FormGroup>
            <img className="avatar" src={this.state.avatar || noUserPic} alt="avatar preview" />
            <TextField
              floatingLabelText="Avatar Image URL"
              floatingLabelFixed={true}
              value={this.state.avatar}
              onChange={(event) => this.handleChange(event)}
              name="avatar"
              fullWidth={true}
              hintText="http://www.example.com/my-picture.jpg"
            />
          </FormGroup>

          {/* buttons */}
          <FormGroup>
            <Button disabled={signupValid()} color="primary" className="mr-2" onClick={(e) => this.handleSignUp(e)} >
              Sign-up
                  </Button>
          </FormGroup>
        </Form>
      </MuiThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    color: "red"
  }
});


export default SignUpForm;