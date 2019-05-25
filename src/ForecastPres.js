import React from "react";



const ForecastPres = props => (

    <div className="weather__info">
    {
      props.city && props.country &&
    <p className="weather__key"> Location:
    <span className="weather__value"> {props.city} {props.country}</span>
    </p>
    }
    </div>
  )

  export default ForecastPres
