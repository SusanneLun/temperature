import React, { Component } from "react";

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

class ForecastPres extends Component {

unixTimestamp(t)
  {
  var dt = new Date(t*1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return days[dt.getDay()] + ' ' + hr + ':' + m
  }

  render() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (

    <div className="forecast__info">

    {
      this.props.city && this.props.country &&
    <p className="forecast__key"> Location:
    <span className="forecast__value"> {this.props.city} {this.props.country}</span>
    </p>
    }
    <section className="card">
    <div className="card--content">
    {
      this.props.date && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date)} </span>
    </p>
    }
    {
      this.props.temperature && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature}</span>
      </p>
    }
    {
      this.props.humidity && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity}</span>
      </p>
    }
    {
      this.props.description && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description}</span>
      </p>
    }
    {
      this.props.windspeed && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed}</span>
      </p>
    }
    </div>
    <div className="card--content">
    {
      this.props.date1 && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date1)} </span>
    </p>
    }
    {
      this.props.temperature1 && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature1}</span>
      </p>
    }
    {
      this.props.humidity1 && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity1}</span>
      </p>
    }
    {
      this.props.description1 && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description1}</span>
      </p>
    }
    {
      this.props.windspeed1 && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed1}</span>
      </p>
    }
    </div>
    <div className="card--content">
    {
      this.props.date2 && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date2)} </span>
    </p>
    }
    {
      this.props.temperature2 && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature2}</span>
      </p>
    }
    {
      this.props.humidity2 && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity2}</span>
      </p>
    }
    {
      this.props.description2 && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description2}</span>
      </p>
    }
    {
      this.props.windspeed2 && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed2}</span>
      </p>
    }
    </div>
    <div className="card--content">
    {
      this.props.date3 && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date3)} </span>
    </p>
    }
    {
      this.props.temperature3 && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature3}</span>
      </p>
    }
    {
      this.props.humidity3 && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity3}</span>
      </p>
    }
    {
      this.props.description3 && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description3}</span>
      </p>
    }
    {
      this.props.windspeed3 && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed3}</span>
      </p>
    }
    </div>
    <div className="card--content">
    {
      this.props.date4 && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date4)} </span>
    </p>
    }
    {
      this.props.temperature4 && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature4}</span>
      </p>
    }
    {
      this.props.humidity4 && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity4}</span>
      </p>
    }
    {
      this.props.description4 && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description4}</span>
      </p>
    }
    {
      this.props.windspeed4 && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed4}</span>
      </p>
    }
    </div>
    <div className="card--content">
    {
      this.props.date5 && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date5)} </span>
    </p>
    }
    {
      this.props.temperature5 && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature5}</span>
      </p>
    }
    {
      this.props.humidity5 && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity5}</span>
      </p>
    }
    {
      this.props.description5 && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description5}</span>
      </p>
    }
    {
      this.props.windspeed5 && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed5}</span>
      </p>
    }
    </div>
    <div className="card--content">
    {
      this.props.date6 && <p className="forecast__key">
      <span className="forecast__value"> {this.unixTimestamp(this.props.date6)} </span>
    </p>
    }
    {
      this.props.temperature6 && <p className="forecast__key">Temperature:
      <span className="forecast__value"> {this.props.temperature6}</span>
      </p>
    }
    {
      this.props.humidity6 && <p className="forecast__key">Humidity:
      <span className="forecast__value"> {this.props.humidity6}</span>
      </p>
    }
    {
      this.props.description6 && <p className="forecast__key">Conditions:
      <span className="forecast__value"> {this.props.description6}</span>
      </p>
    }
    {
      this.props.windspeed6 && <p className="forecast__key">Windspeed:
      <span className="forecast__value"> {this.props.windspeed6}</span>
      </p>
    }
    </div>
    </section>
    {
      this.props.error && <p className="forecast__error">{this.props.error}</p>
    }
    </div>
  )}
}

  export default ForecastPres
