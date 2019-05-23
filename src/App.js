import React, { Component } from 'react';

import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Home from './Home'
import Myarea from './Myarea'
import Forecast from './Forecast'
import index from './index'



class App extends Component {


render() {
  return (
    <div>
      <div>
        <Navbar className="navbar"/>
        <Router>
        <div>
        <Route path="/" component={Home} />
        <Route exact path="/myarea" component={Myarea} />
        <Route exact path="/forecast" component={Forecast} />
        </div>
        </Router>
        </div>
      </div>




)
}
}

export default withRouter (App);
