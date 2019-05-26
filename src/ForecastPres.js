import React from "react";



const ForecastPres = props => (

    <div className="weather__info">
    {
      props.city && props.country &&
    <p className="weather__key"> Location:
    <span className="weather__value"> {props.city} {props.country}</span>
    </p>
    }
    <p>
    Tomorrow
    </p>
    {
      props.temperature && <p className="weather__key">Temperature:
      <span className="weather__value"> {props.temperature}</span>
      </p>
    }
    {
      props.humidity && <p className="weather__key">Humidity:
      <span className="weather__value"> {props.humidity}</span>
      </p>
    }
    {
      props.temperature1 && <p className="weather__key">Conditions:
      <span className="weather__value"> {props.description}</span>
      </p>
    }
    {
      props.windspeed && <p className="weather__key">Windspeed:
      <span className="weather__value"> {props.windspeed}</span>
      </p>
    }
    <p>
    The Day After Tomorrow
    </p>
    {
      props.temperature1 && <p className="weather__key">Temperature:
      <span className="weather__value"> {props.temperature1}</span>
      </p>
    }
    {
      props.humidity1 && <p className="weather__key">Humidity:
      <span className="weather__value"> {props.humidity1}</span>
      </p>
    }
    {
      props.description1 && <p className="weather__key">Conditions:
      <span className="weather__value"> {props.description1}</span>
      </p>
    }
    {
      props.windspeed1 && <p className="weather__key">Windspeed:
      <span className="weather__value"> {props.windspeed1}</span>
      </p>
    }
    {
      props.error && <p className="weather__error">{props.error}</p>
    }
    </div>
  )

  export default ForecastPres
