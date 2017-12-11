import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer.js';
import NavBar from './Components/NavBar.js';
import Buy from './Components/Buy.js';
import Sell from './Components/Sell.js';
import Explore from './Components/Explore.js';
import About from './Components/About.js';
import logo from './img/unistore-logo.png';
import buyImg from './img/buy.png';
import sellImg from './img/sell.png';
import firebase from 'firebase/app';
import SignUpForm from './SignUp';
import SignInForm from './SignIn';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import Profile from './Components/Profile.js';
import 'firebase/auth';
import 'firebase/database';


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
    this.listingsRef = this.dbRef.child('items')
    this.listingsRef.on('value', (snapshot) => {
        this.setState({ listings: snapshot.val() })
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
    let sellCallback = (routerProps) => {
      return <Sell {...routerProps} user={this.state.user} />
    }
    let buyCallback = (routerProps) => {
      return <Buy {...routerProps} user={this.state.user} />
    }
    let exploreCallback = (routerProps) => {
      return <Explore {...routerProps} listings={this.state.listings} />
    }

    let content = null;
    //if logged out, show signup form
    if (!this.state.user) {
      if (!this.state.signUp) {
        content = (
          <div className="container">
            <header className="App-header page-header">
              <img id="appLogo" src={logo} className="App-logo" alt="App Logo"/>
           </header>
           <div className="jumbotron">
             <h1>Sign In</h1>
             <SignInForm
               signInCallback={(e, p) => this.handleSignIn(e, p)}
               signUpInsteadCallback={(bool) => this.signUpInstead(bool)} />
           </div>
          </div>
        );
      }
      else {
        content = (
          <div className="container">
            <header className="App-header page-header">
              <img id="appLogo" src={logo} className="App-logo" alt="App Logo"/>
           </header>
           <div className="jumbotron">
            <h1>Sign Up</h1>
            <SignUpForm
              signUpCallback={(e, p, h, a) => this.handleSignUp(e, p, h, a)} />
          </div>
          </div>
        );
      }
    }
    else {
      content = (
        <div>
          <div className={css(styles.logOutBar)}>University Of Washington
            {this.state.user &&
              <FlatButton className={css(styles.logOutButton)} primary={true} label="Log Out" onClick={() => this.handleSignOut()}/>
            }
          </div>
          <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
            <div className="App">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Buy' render={buyCallback} />
                <Route path='/Sell' render={sellCallback} />

                <Route path='/Explore' render={exploreCallback} />
                <Route path='/About' component={About} />
               
                <Route path='/Profile' render={(props) => <Profile user={this.state.user}/>} />

                <Route exact redirect='/' component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      )
    }

    return (
      <MuiThemeProvider>
        <div>
          {this.state.loading ? (<div><CircularProgress size={150} thickness={7} /></div>) : (content)}
        </div>
      </MuiThemeProvider>
    );
  }
}


class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <div id="buysellimg" className="jumbotron text-center">
          <Link to='/Buy'>
            <input id="buyImg" type="image" src={buyImg} />
            <h2>Buy Books</h2>
          </Link>
          <Link to='/Sell'>
            <input id="sellImg" type="image" src={sellImg} />
            <h2>Sell Books</h2>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  logOutBar:{
    height: "37px",
    width: "100%",
    color: "#E1E1E1",
    backgroundColor: "#202D33"
  },

  logOutButton:{
    position: "relative",
    float: "right"
  }
});

export default App;
