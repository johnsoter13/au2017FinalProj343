import React, { Component } from 'react'; //import React Component
import firebase from 'firebase/app';
import 'firebase/database';
import NavBar from './NavBar';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        let boughtItems = [];
        this.db = firebase.database().ref().child("users/" + this.props.user.displayName);
        this.db.child("bought_items").on('value', (snapshot) => {
            boughtItems.push(snapshot.val());
        });
        this.setState({items: boughtItems});
    }

    render() {
        
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

export default Profile;