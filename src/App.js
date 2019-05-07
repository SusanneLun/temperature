import React, { Component } from 'react';
import './App.css';
import Titles from "./Titles"
import Form from "./Form"
import Weather from "./Weather"

class App extends Component {


componentDidMount() {

}
render() {
  return (
    <div>

    <Titles />
    <Form />
    <Weather />

    </div>
  );
}
}

export default App;
