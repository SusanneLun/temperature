import React, { Component } from 'react';
import './App.css';
import Titles from "./Titles"
import Form from "./Form"
import Weather from "./Weather"



const API_KEY = "5c95c4fb3811e6af0f71b2a15dcd6333";

class Home extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    windspeed: undefined,
    error: undefined
  }

getWeather =  async (e) => {
  e.preventDefault()
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      windspeed: data.wind.speed,
      error: ""

    })
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter city and country"

    })
  }
  }


  render() {
    return (
      <div>

        <div className="main">
        <div classNme="container">
        <div className="row">
          <div className="col-xs-5 title-container">
            <Titles />
        </div>
        <div className="col-xs-7 form-container">
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          windspeed={this.state.windspeed}
          error={this.state.error}
        />
      </div>
      </div>
      </div>
      </div>
      </div>

    )
  }
}

export default Home;
