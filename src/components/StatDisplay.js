import React from 'react'

// A Stat is an Array of Objects consisting of the structure
// {
//	"key": {v: Number}	
// }
// where "key" can be any variable. Here, these stats are air quality stats such
// as o3, pm2.5, pm10 concentration.

const abbreviationsMap = {
	"co": "Carbon Monoxide",
	"o3": "Ozone",
	"so2": "Sulfur Dioxide",
	"no2": "Nitrogen Dioxide",
	"pm10": <span>PM<sub>10</sub></span>,
	"pm25": <span>PM<sub>2.5</sub></span>,
	"t": "Temperature",
	"w": "Wind Speed",
	"p": "Air Pressure",
	"h": "Humidity"
}

const ppm = " ppm"
const degC = <span><sup> o</sup>C</span>
const kmH = " km/h"
const hPa = " hPa"
const gCm3 = <span> g/cm<sup>3</sup></span>

const measurements = {
	"co": ppm,
	"o3": ppm,
	"so2": ppm,
	"no2": ppm,
	"t": degC,
	"w": kmH,
	"p": hPa,
	"h": gCm3
}

/**
	Displays a Stat (defined above) in a block-style display, where the stat name is on the left
	and the number is on the right.
	@param stat
	The stat to be shown.
*/
export default function StatDisplay({stat}) {
	if (stat !== undefined && stat !== null) {
		const accessKey = Object.keys(stat)[0]
		const ppm = stat[accessKey].v // Number (parts per million)
		return (
			<div className="d-flex text-white col-md-12 col-xs-6">
				<h2 className="mr-auto p-5">{abbreviationsMap[accessKey]}</h2>
				<h2 className="ml-auto p-5">{ppm}{measurements[accessKey] ? measurements[accessKey] : ''}</h2>
			</div>
		)
	}
	else {
		return null
	}
}