import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	render (){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}

	renderWeather(cityData){
		const temps =  cityData.list.map(weather => weather.main.temp);
		const pressure =  cityData.list.map(weather => weather.main.pressure);
		const humidity =  cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={cityData.city.id}>
				<td><GoogleMap lat={lat} lng={lon} /></td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressure} color="green" units="hPa" /></td>
				<td><Chart data={humidity} color="blue" units="%" /></td>
			</tr>
		);
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);