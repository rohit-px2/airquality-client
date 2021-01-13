import React from 'react'
import StatDisplay from './StatDisplay'

/**
	The StatsDisplay consists of multiple instances of StatDisplay.
	@param stats
	The list of stats to be displayed.
*/
export default function StatsDisplay({stats}) {
	if (stats === undefined || stats === null) {
		return null
	}
	const display = stats.map((stat, idx) => {
		return <StatDisplay stat={stat} key={idx} />
	})
	return display
}