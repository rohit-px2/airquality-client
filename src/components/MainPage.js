import React from 'react'
import JumboLocationAndInput from './JumboLocationAndInput'
import AQIIndicator from './AQIIndicator'
import StatsDisplay from './StatsDisplay'
import Helmet from 'react-helmet'

/**
	The main page of the application.
	@param info
	The AQI information. Contains city & country data, as well as AQI statistics.
	@param setLocation
	A function to set and update the location being displayed to a new one.
	@param user
	User information.
	@param addLocation
	A function to add a location to the user's dashboard.
*/
export default function MainPage({info, setLocation, user, addLocation}) {
	return (
		<>
			<Helmet>
				<title>{`AQInfo: ${info.city}, ${info.country}`}</title>
			</Helmet>
			<div className="container">
				<JumboLocationAndInput
					setLocation={setLocation}
					country={info.country}
					city={info.city}
					user={user}
					addLocation={addLocation}
				/>
				<AQIIndicator aqi={info.aqi} />
				<StatsDisplay stats={info.stats} />
			</div>
		</>
	)
}
