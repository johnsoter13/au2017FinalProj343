import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SignUpForm from './SignUp';
import SignInForm from './SignIn'
import firebase from 'firebase/app';
import { DropdownButton, MenuItem, ButtonGroup, Button } from 'react-bootstrap'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state value
      db: [],
      loading: true,
      signUp: false
    };
  }

  componentDidMount() {
    this.dbRef = firebase.database().ref();
    this.dbRef.on('value', (snapshot) => {
      this.setState({ db: snapshot.val() })
    });


    let authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.setState({
          user: firebaseUser,
          loading: false
        });
      }

      else {
        this.setState({
          user: null,
          loading: false
        });
      }
    });
  }

  handleSignUp(email, password, handle, avatar) {
    this.setState({ errorMessage: null }); //clear any old errors

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((firebaseUser) => {
        return firebaseUser.updateProfile({
          displayName: handle,
          photoURL: avatar
        })
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      })

      let newUser = {
        userEmail: email,
        userName: handle,
        userPhoto: avatar
      }
  
      this.dbRef.child('users').child(handle).set(newUser)
        .catch(error => console.log(error));
  }

  handleSignOut() {
    this.setState({
      errorMessage: null,
      signUp: false
    }); //clear any old errors

    firebase.auth().signOut()
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      })
  }

  handleSignIn(email, password) {
    this.setState({ errorMessage: null }); //clear any old errors

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      })
  }

  signUpInstead(bool) {
    if (bool === true) {
      this.setState({ signUp: true });
    }
  }

  render() {
    let content = null;
    //if logged out, show signup form
    if (!this.state.user) {
      if (!this.state.signUp) {
        content = (
          <div className="container">
            <h1>Sign In</h1>
            <SignInForm
              signInCallback={(e, p) => this.handleSignIn(e, p)}
              signUpInsteadCallback={(bool) => this.signUpInstead(bool)} />
          </div>
        );
      }
      else {
        content = (
          <div className="container">
            <h1>Sign Up</h1>
            <SignUpForm
              signUpCallback={(e, p, h, a) => this.handleSignUp(e, p, h, a)} />
          </div>
        );
      }
    }
    else {

      content = (
        <div className="container">
          {this.state.user &&
            <button className="logoutBtn btn btn-warning"
              onClick={() => this.handleSignOut()}>
              Log Out
          </button>
          }
        </div>
      )
    }

    return (
      <div>
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }
        {content}
      </div>
    );
  }
}

export default App;
