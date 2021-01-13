import React from 'react'
import JumboLocationAndInput from './JumboLocationAndInput'
import AQIIndicator from './AQIIndicator'
import StatsDisplay from './StatsDisplay'
import Helmet from 'react-helmet'

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
