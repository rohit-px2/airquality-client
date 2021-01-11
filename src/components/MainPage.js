import React from 'react'
import JumboLocationAndInput from './JumboLocationAndInput'
import AQIIndicator from './AQIIndicator'

export default function MainPage({info, setLocation}) {
	return (
		<div className="container-fluid">
			<JumboLocationAndInput
				setLocation={setLocation}
				country={info.country}
				city={info.city}
			/>
			<AQIIndicator aqi={info.aqi} />
	        <p>{JSON.stringify(info)}</p>
		</div>
	)
}
