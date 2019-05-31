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
    date: undefined,
    humidity: undefined,
    description: undefined,
    windspeed: undefined,
    date1: undefined,
    temperature1: undefined,
    temperature2: undefined,
    temperature3: undefined,
    temperature4: undefined,
    temperature5: undefined,
    temperature6: undefined,
    humidity1: undefined,
    humidity2: undefined,
    humidity3: undefined,
    humidity4: undefined,
    humidity5: undefined,
    humidity6: undefined,
    description1: undefined,
    description2: undefined,
    description3: undefined,
    description4: undefined,
    description5: undefined,
    description6: undefined,
    windspeed1: undefined,
    windspeed2: undefined,
    windspeed3: undefined,
    windspeed4: undefined,
    windspeed5: undefined,
    windspeed6: undefined,
    date2: undefined,
    date3: undefined,
    date4: undefined,
    date5: undefined,
    date6: undefined,
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
        date: data.list[0].dt,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        windspeed: data.list[0].wind.speed,
        date1: data.list[1].dt,
        temperature1: data.list[1].main.temp,
        temperature2: data.list[2].main.temp,
        temperature3: data.list[3].main.temp,
        temperature4: data.list[4].main.temp,
        temperature5: data.list[5].main.temp,
        temperature6: data.list[6].main.temp,
        humidity1: data.list[1].main.humidity,
        humidity2: data.list[2].main.humidity,
        humidity3: data.list[3].main.humidity,
        humidity4: data.list[4].main.humidity,
        humidity5: data.list[5].main.humidity,
        humidity6: data.list[6].main.humidity,
        description1: data.list[1].weather[0].description,
        description2: data.list[2].weather[0].description,
        description3: data.list[3].weather[0].description,
        description4: data.list[4].weather[0].description,
        description5: data.list[5].weather[0].description,
        description6: data.list[6].weather[0].description,
        windspeed1: data.list[1].wind.speed,
        windspeed2: data.list[2].wind.speed,
        windspeed3: data.list[3].wind.speed,
        windspeed4: data.list[4].wind.speed,
        windspeed5: data.list[5].wind.speed,
        windspeed6: data.list[6].wind.speed,
        date2: data.list[2].dt,
        date3: data.list[3].dt,
        date4: data.list[4].dt,
        date5: data.list[5].dt,
        date6: data.list[6].dt,
        error: ""

      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        date: undefined,
        humidity: undefined,
        description: undefined,
        windspeed: undefined,
        date1: undefined,
        temperature1: undefined,
        temperature2: undefined,
        temperature3: undefined,
        temperature4: undefined,
        temperature5: undefined,
        temperature6: undefined,
        humidity1: undefined,
        humidity2: undefined,
        humidity3: undefined,
        humidity4: undefined,
        humidity5: undefined,
        humidity6: undefined,
        description1: undefined,
        description2: undefined,
        description3: undefined,
        description4: undefined,
        description5: undefined,
        description6: undefined,
        windspeed1: undefined,
        windspeed2: undefined,
        windspeed3: undefined,
        windspeed4: undefined,
        windspeed5: undefined,
        windspeed6: undefined,
        date2: undefined,
        date3: undefined,
        date4: undefined,
        date5: undefined,
        date6: undefined,
        error: "Please enter city and country"

      })
    }
}

unixTimestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
}





render() {

  return (
    <div>
    <ForecastForm getWeather={this.getWeather}/>
    <ForecastTitle />
    <ForecastPres
    date={this.state.date}
    date1={this.state.date1}
    date2={this.state.date2}
    date3={this.state.date3}
    date4={this.state.date4}
    date5={this.state.date5}
    date6={this.state.date6}
    temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    windspeed={this.state.windspeed}
    description={this.state.description}
    temperature1={this.state.temperature1}
    temperature2={this.state.temperature2}
    temperature3={this.state.temperature3}
    temperature4={this.state.temperature4}
    temperature5={this.state.temperature5}
    temperature6={this.state.temperature6}
    humidity1={this.state.humidity1}
    humidity2={this.state.humidity2}
    humidity3={this.state.humidity3}
    humidity4={this.state.humidity4}
    humidity5={this.state.humidity5}
    humidity6={this.state.humidity6}
    description1={this.state.description1}
    description2={this.state.description2}
    description3={this.state.description3}
    description4={this.state.description4}
    description5={this.state.description5}
    description6={this.state.description6}
    windspeed1={this.state.windspeed1}
    windspeed2={this.state.windspeed2}
    windspeed3={this.state.windspeed3}
    windspeed4={this.state.windspeed4}
    windspeed5={this.state.windspeed5}
    windspeed6={this.state.windspeed6}
    error={this.state.error}
    />
    </div>
  )
}
}



export default Forecast
