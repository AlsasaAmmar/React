import React from 'react'
import CityName from './CityName'
import WeatherInfo from './WeatherInfo'
import Details from './Details'
import '../App.css'
import CloseButton from './CloseButton'

function City ({
  name,
  weatherKind,
  weatherDescription,
  minTemp,
  maxTemp,
  coords,
  handleClose,
  country,
  id
}) {
  return (
    <div className='cityCard'>
      <CloseButton id={id} handleClose={handleClose} />
      <CityName name={name} country={country} />
      <WeatherInfo
        weatherKind={weatherKind}
        weatherDescription={weatherDescription}
      />
      <Details minTemp={minTemp} maxTemp={maxTemp} lat={coords.lat} lon={coords.lon} />
    </div>
  )
}

export default City
