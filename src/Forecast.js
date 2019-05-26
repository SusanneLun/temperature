import React, { Component } from "react"
import ForecastPres from "./ForecastPres"
import ForecastForm from "./ForecastForm"
import ForecastTitle from "./ForecastTitle"



const API_KEY = "5c95c4fb3811e6af0f71b2a15dcd6333";


class Forecast extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    windspeed: undefined,
    temperature1: undefined,
    humidity1: undefined,
    description1: undefined,
    windspeed1: undefined,
    error: undefined
  }

  getWeather =  async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json();
      if (city && country) {
      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        windspeed: data.list[0].wind.speed,
        temperature1: data.list[1].main.temp,
        humidity1: data.list[1].main.humidity,
        description1: data.list[1].weather[0].description,
        windspeed1: data.list[1].wind.speed,
        error: ""

      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windspeed1: undefined,
        description: undefined,
        temperature1: undefined,
        humidity1: undefined,
        description1: undefined,
        windspeed1: undefined,
        error: "Please enter city and country"

      })
    }
}

render() {
  return (
    <div>
    <ForecastForm getWeather={this.getWeather}/>
    <ForecastTitle />
    <ForecastPres
    temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    windspeed={this.state.windspeed}
    description={this.state.description}
    temperature1={this.state.temperature1}
    humidity1={this.state.humidity1}
    description1={this.state.description1}
    windspeed1={this.state.windspeed1}
    error={this.state.error}
    />
    </div>
  )
}
}



export default Forecast
