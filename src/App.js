import React, { Component } from 'react';

import Navbar from './Navbar'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './Home'
import Myarea from './Myarea'
import Forecast from './Forecast'
import index from './index'
import Header from './Header'



class App extends Component {

render() {
  return (
    <div>
      <div>
        <Navbar className="navbar"/>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/myarea" component={Myarea}/>
        <Route exact path="/forecast" component={Forecast} />
        </Switch>
        </div>
      </div>

)
}
}

export default withRouter (App);
