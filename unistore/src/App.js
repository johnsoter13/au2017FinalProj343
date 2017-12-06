import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer.js';
import NavBar from './Components/NavBar.js';
import Buy from './Components/Buy.js';
import Sell from './Components/Sell.js';
import Explore from './Components/Explore.js';
import background from './img/background.jpg';
import buyImg from './img/buy.png';
import sellImg from './img/sell.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Buy' component={Buy} />
            <Route path='/Sell' component={Sell} />
            <Route path='/Explore' component={Explore} />
            <Route exact redirect='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <div id="pagetext" className="container jumbotron">
        <h1>Lorem ipsum dolor sit amet, nemore imperdiet eu eum</h1>
        <h4>Lorem ipsum dolor sit amet, nemore imperdiet eu eum, aliquam omnesque scribentur vim te. Ius enim duis porro et, te invidunt definitiones mea, melius eloquentiam est ei. Et aliquam convenire sit, mei ad qualisque evertitur. Ex vel graece inermis accommodare, ex placerat concludaturque nec.</h4>
      <input id="learn" type="button" value="Learn More" />
      </div>
      <br/>
      <div id="buysellimg" className="jumbotron text-center">
        <Link to='/Buy'>
          <input id="buyImg" type="image" src={buyImg}/>
          <h2>Buy Books</h2>
        </Link>
        <Link to='/Sell'>
          <input id="sellImg" type="image" src={sellImg}/>
          <h2>Sell Books</h2>
        </Link>
      </div>
      <Footer/>
      </div>
    )
  }
}



export default App;
