import React, { Component } from "react"
import Form from "./Form"
import ForecastPres from "./ForecastPres"



const API_KEY = "5c95c4fb3811e6af0f71b2a15dcd6333";


class Forecast extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
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
        description: data.list[0].weather.description,
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
    <Form getWeather={this.getWeather}/>
    <p>
    Tomorrow's Weather For {this.state.city} In {this.state.country}
    </p>
    <p>
    Temperature:
    {this.state.temperature}
    </p>
    <p>
    Humidity:
    {this.state.humidity}
    </p>
    <p>
    Description:
    {this.state.description}
    </p>
    </div>
  )
}
}



export default Forecast
