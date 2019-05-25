import React from "react";


const ForecastForm = props => (

    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button>Get Forecast</button>
    </form>
  )

export default ForecastForm;
