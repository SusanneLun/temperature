import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar"
import { Route, Switch } from 'react-router-dom'
import Home from "./Home"
import Myarea from "./Myarea"
import Forecast from "./Forecast"



class App extends Component {


render() {
  return (
    <div>

        <Navbar className="navbar"/>
        <Switch>
        <Route path="/" component={routerProps =>
        <Home {...routerProps} /> } />
        <Route exact path="/myarea" component={routerProps =>
        <Myarea {...routerProps} />} />
        <Route exact path="/forecast" component={routerProps =>
        <Forecast {...routerProps} />} />
        </Switch>
      </div>
  



)
}
}

export default App;
