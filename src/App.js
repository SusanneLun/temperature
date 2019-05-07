import React, { Component } from 'react';
import './App.css';
import Titles from "./Titles"
import Form from "./Form"
import Weather from "./Weather"

const API_KEY = "5c95c4fb3811e6af0f71b2a15dcd6333";


class App extends Component {

  getWeather =  async (e) => {
    e.preventDefault()
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);

      const data = await api_call.json();
      console.log(data)

    }

render() {
  return (
    <div>

    <Titles />
    <Form getWeather={this.getWeather}/>
    <Weather />

    </div>
  );
}
}

export default App;
