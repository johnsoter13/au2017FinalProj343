import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import CircularProgress from 'material-ui/CircularProgress';
import BuyList from './RenderItems.js'

class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
        let items = {}
        if (this.props.listings) {
            this.values = Object.values(this.props.listings);
            for (let i = 0; i < this.values.length; i++) {
                this.listingValue = Object.values(this.values[i]);
                this.listingId = Object.keys(this.values[i]);
                for (let j = 0; j < this.listingId.length; j++) {
                    items[this.listingId[j]] = this.listingValue[j]
                }
            }
        }

        return (
            <div>
                <NavBar />
                <div className="container">
                    {this.state.loading ? (<div><CircularProgress size={150} thickness={7} /></div>) :
                        (<BuyList listings={items} />)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Explore;


