import React, { Component } from "react";



class ForecastPres extends Component {

unixTimestamp(t)
  {
  var dt = new Date(t*1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return dt+hr
  }

  render() {
    return (

    <div className="weather__info">
    {
      this.props.city && this.props.country &&
    <p className="weather__key"> Location:
    <span className="weather__value"> {this.props.city} {this.props.country}</span>
    </p>
    }
    {
      this.props.date && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date)} </span>
    </p>
    }
    {
      this.props.temperature && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature}</span>
      </p>
    }
    {
      this.props.humidity && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity}</span>
      </p>
    }
    {
      this.props.description && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description}</span>
      </p>
    }
    {
      this.props.windspeed && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed}</span>
      </p>
    }
    {
      this.props.date1 && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date1)} </span>
    </p>
    }
    {
      this.props.temperature1 && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature1}</span>
      </p>
    }
    {
      this.props.humidity1 && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity1}</span>
      </p>
    }
    {
      this.props.description1 && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description1}</span>
      </p>
    }
    {
      this.props.windspeed1 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed1}</span>
      </p>
    }
    {
      this.props.date2 && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date2)} </span>
    </p>
    }
    {
      this.props.temperature2 && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature2}</span>
      </p>
    }
    {
      this.props.humidity2 && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity2}</span>
      </p>
    }
    {
      this.props.description2 && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description2}</span>
      </p>
    }
    {
      this.props.windspeed2 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed2}</span>
      </p>
    }
    {
      this.props.date3 && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date3)} </span>
    </p>
    }
    {
      this.props.temperature3 && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature3}</span>
      </p>
    }
    {
      this.props.humidity3 && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity3}</span>
      </p>
    }
    {
      this.props.description3 && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description3}</span>
      </p>
    }
    {
      this.props.windspeed3 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed3}</span>
      </p>
    }
    {
      this.props.date4 && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date4)} </span>
    </p>
    }
    {
      this.props.temperature4 && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature4}</span>
      </p>
    }
    {
      this.props.humidity4 && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity4}</span>
      </p>
    }
    {
      this.props.description4 && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description4}</span>
      </p>
    }
    {
      this.props.windspeed4 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed4}</span>
      </p>
    }
    {
      this.props.date5 && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date5)} </span>
    </p>
    }
    {
      this.props.temperature5 && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature5}</span>
      </p>
    }
    {
      this.props.humidity5 && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity5}</span>
      </p>
    }
    {
      this.props.description5 && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description5}</span>
      </p>
    }
    {
      this.props.windspeed5 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed5}</span>
      </p>
    }
    {
      this.props.date6 && <p className="weather__key">
      <span className="weather__value"> {this.unixTimestamp(this.props.date6)} </span>
    </p>
    }
    {
      this.props.temperature6 && <p className="weather__key">Temperature:
      <span className="weather__value"> {this.props.temperature6}</span>
      </p>
    }
    {
      this.props.humidity6 && <p className="weather__key">Humidity:
      <span className="weather__value"> {this.props.humidity6}</span>
      </p>
    }
    {
      this.props.description6 && <p className="weather__key">Conditions:
      <span className="weather__value"> {this.props.description6}</span>
      </p>
    }
    {
      this.props.windspeed6 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {this.props.windspeed6}</span>
      </p>
    }
    {
      this.props.error && <p className="weather__error">{this.props.error}</p>
    }
    </div>
  )}
}

  export default ForecastPres
