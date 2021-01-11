import React from 'react'
import JumboLocationAndInput from './JumboLocationAndInput'
import AQIIndicator from './AQIIndicator'
import StatsDisplay from './StatsDisplay'

export default function MainPage({info, setLocation}) {
	return (
		<div className="container">
			<JumboLocationAndInput
				setLocation={setLocation}
				country={info.country}
				city={info.city}
			/>
			<AQIIndicator aqi={info.aqi} />
			<StatsDisplay stats={info.stats} />
		</div>
	)
}
