import React from 'react'
import StatDisplay from './StatDisplay'

export default function StatsDisplay({stats}) {
	if (stats === undefined || stats === null) {
		return null
	}
	const display = stats.map((stat, idx) => {
		return <StatDisplay stat={stat} key={idx} />
	})
	return display
}