import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
