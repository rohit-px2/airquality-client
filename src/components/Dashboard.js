import React from 'react'
import { Helmet } from 'react-helmet'

export default function Dashboard({user, setLocation}) {

	function getAqiInfo(location) {
		setLocation(location)
		window.location.assign("/")
	}

	const locationCards = user ? user.locations.map((location, idx) => {
		return (
			<div key={idx} className="col-12 col-md-6 m-3">
				<button className="btn btn-outline-light" onClick={() => getAqiInfo(location)}>
					{location.city}, {location.country}
				</button>
			</div>
		)
	}) : null

	return (
		<>
		<Helmet>
			<title>{`Dashboard`}</title>
		</Helmet>
		<div className="container">
			<h2 className="text-center text-white p-2">Dashboard</h2>
			<hr style={{backgroundColor: "white"}} className="m-2"/>
			{locationCards}
		</div>
		</>
	)
}