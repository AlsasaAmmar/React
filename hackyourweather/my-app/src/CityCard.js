import React from 'react';
import data from './data.json';
import CityName from './CityName';
import WeatherInfo from './WeatherInfo';
import Details from './Details';  


function CityCard() {
	return (
		<div>
			{data.map((city) => {
				return (
					<div className="cityCard">
						<CityName name={city.name} />
						<WeatherInfo
							weatherKind={city.weather[0].main}
							weatherDescription={city.weather[0].description}
						/>
						<Details
							minTemp={city.main.temp_min}
							maxTemp={city.main.temp_max}
							lon={city.coord.lon}
							lat={city.coord.lat}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default CityCard;
