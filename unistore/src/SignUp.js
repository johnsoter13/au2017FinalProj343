import React, { Component } from 'react'; //import React Component
import { TextField, MuiThemeProvider, muiThemebtn } from 'material-ui/TextField';
import { Form, FormGroup, Label, Input, Button, Alert, FormFeedback } from 'reactstrap';
import noUserPic from './img/no-user-pic.png';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            handle: '',
            avatar: ''
        }; //initialize state
    }

    handleSignUp(event) {
        event.preventDefault(); //don't submit
        let avatar = this.state.avatar || noUserPic; //assign default if undefined
        this.props.signUpCallback(this.state.email, this.state.password, this.state.handle, avatar);
    }

    handleChange = (event) => {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState({ [event.target.name]: newState[event.target.name] });
    }
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
            //pattern comparison from w3c
            //https://www.w3.org/TR/html-markup/input.email.html#input.email.attrs.value.single
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
        let passwordErrors = this.validate(this.state.password, { required: true, minLength: 6 });
        let handleErrors = this.validate(this.state.handle, { required: true });
    
        let emailValid;
        let passwordValid;
        let handleValid;
    
        if (typeof emailErrors !== 'undefined' && emailErrors.length === 0) {
          emailValid = true;
        }
        if (typeof passwordErrors !== 'undefined' && passwordErrors.length === 0) {
          passwordValid = true;
        }
        if (typeof handleErrors !== 'undefined' && handleErrors.length === 0) {
          handleValid = true;
        }
    
        function signupValid() {
          return !emailValid || !passwordValid || !handleValid;
        }
        function signinValid() {
          return !emailValid || !passwordValid
        }
    
        // const SignUp = () => (

        //     <div>
        //         <TextField
        //             hintText="Username Field"
        //             floatingLabelText="Username"
        //             type="text"
        //         /><br />
        //         <br />
        //         <TextField
        //             hintText="Email Field"
        //             floatingLabelText="Email"
        //             type="text"
        //         /><br />
        //         <br />
        //         <TextField
        //             hintText="Email Field"
        //             floatingLabelText="Confirm Email"
        //             type="text"
        //         /><br />
        //         <br />
        //         <TextField
        //             hintText="Password Field"
        //             floatingLabelText="Password"
        //             type="password"
        //         /><br />
        //         <br />
        //         <TextField
        //             hintText="Upload an Avatar"
        //             floatingLableText="www.YourAvatarUrlHere.com"
        //             type="text"
        //         /><br />
        //         <br />
        //         <Button disabled={signupValid()} color="primary" className="mr-2" onClick={(e) => this.handleSignUp(e)} >
        //             Sign-up
        //         </Button>
        //     </div>
        // );

        return (
            <Form>
              {/* email */}
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  valid={emailValid}
                  id="email"
                  type="email"
                  name="email"
                />
                {emailErrors.length > 0 &&
                  emailErrors.map((error) => {
                    return (
                    <FormFeedback key={error}>
                      {error}
                    </FormFeedback>
                  )})
                  
                }
      
              </FormGroup>
      
              {/* password */}
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  value={this.state.password}
                  onChange={this.handleChange}
                  valid={passwordValid}
                  id="password"
                  type="password"
                  name="password"
                />
                {passwordErrors.length > 0 &&
                  passwordErrors.map((error) => {
                    return (
                    <FormFeedback key={error}>
                      {error}
                    </FormFeedback>
                  )})
                }
              </FormGroup>
      
              {/* handle */}
              <FormGroup>
                <Label htmlFor="handle">Handle</Label>
                <Input
                  value={this.state.handle}
                  onChange={this.handleChange}
                  valid={handleValid}
                  id="handle"
                  name="handle"
                />
                {handleErrors.length > 0 &&
                  handleErrors.map((error) => {
                    return (
                    <FormFeedback key={error}>
                      {error}
                    </FormFeedback>
                  )})
                }
              </FormGroup>
      
              {/* avatar */}
              <FormGroup>
                <img className="avatar" src={this.state.avatar || noUserPic} alt="avatar preview" />
                <Label htmlFor="avatar">Avatar Image URL</Label>
                <Input
                  value={this.state.avatar}
                  onChange={this.handleChange}
                  id="avatar"
                  name="avatar"
                  placeholder="http://www.example.com/my-picture.jpg"
                />
              </FormGroup>
      
              {/* buttons */}
              <FormGroup>
                <Button disabled={signupValid()} color="primary" className="mr-2" onClick={(e) => this.handleSignUp(e)} >
                  Sign-up
                </Button>
              </FormGroup>
            </Form>
        )}


}

export default SignUpForm;