import React, { Component } from "react"



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
        temperature: data.list.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
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
    temperature
    {this.state.temperature}
    </div>
  )
}
}



export default Forecast
