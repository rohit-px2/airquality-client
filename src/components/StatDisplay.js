import React from 'react'

// A Stat is an Array of Objects consisting of the structure
// {
//	"key": {v: Number}	
// }
// where "key" can be any variable. Here, these stats are air quality stats such
// as o3, pm2.5, pm10 concentration.

export default function StatDisplay({stat}) {
	if (stat !== undefined) {
		const key = Object.keys(stat)[0].toUpperCase()
		const ppm = stat[[key]].v // Number (parts per million)
		return (
			<div className="d-flex flex-grow-1">
				<h2 className="mr-auto p-5">{key}</h2>
				<h2 className="ml-auto p-5">{ppm}</h2>
			</div>
		)
	}
	else {
		return null
	}
}