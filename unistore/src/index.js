import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/navbar.css';
import './css/footer.css';
import './css/sell.css';
import './css/explore.css';
import './css/about.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app'


var config = {
    apiKey: "AIzaSyBJN06qGCWV9dp3HemaMsRHWCCJPavcPbw",
    authDomain: "unibookstore-f0cd0.firebaseapp.com",
    databaseURL: "https://unibookstore-f0cd0.firebaseio.com",
    projectId: "unibookstore-f0cd0",
    storageBucket: "unibookstore-f0cd0.appspot.com",
    messagingSenderId: "7215886852"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
