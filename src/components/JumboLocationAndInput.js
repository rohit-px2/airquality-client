import React, {useState} from 'react'
import {Jumbotron} from 'reactstrap'
import aqiService from '../services/aqi'

export default function JumboLocationAndInput({city, country, setLocation, user, addLocation}) {
	const [inputCity, setInputCity] = useState('')
	const [inputCountry, setInputCountry] = useState('')

	/**
		Updates the location.
	*/
	function handleSubmit() {
		setLocation({
			city: inputCity,
			country: inputCountry
		})
	}
	const titleStyle = {
		fontSize: "4rem",
	}

	/**
		Appends the current location to the user's profile.
	*/
	function appendLocation() {
		const location = {city, country}
		addLocation(location)
	}

	/**
		Returns true if the current city has not been added to the user's dashboard.
	*/
	function cityNotAdded() {
		if (user) {
			if (!user.locations) return false
			else {
				const notAdded = user.locations.find(location => location.city === city && location.country === country) === undefined;
				return notAdded
			}
		}
		return false
	}
	/**
		Adds a "add to dashboard" button if the current city has not been added to the user's dashboard.
	*/
	function appendLocationButton() {
		if (user && cityNotAdded()) {
			return (
				<button className="btn btn-secondary mr-auto" onClick={appendLocation} type="button">
					Add to Dashboard
				</button>
			)
		}
		return null
	}

	return (
		<Jumbotron className="p-5 m-0 transparent text-white">
			{appendLocationButton()}
			<div className="row row-header justify-content-center">
				<div className="col-12 mr-5">
					<h1 style={titleStyle} className="text-center">{city}, {country}</h1>
				</div>
				<form onSubmit={handleSubmit} className="mt-2">
					<div className="row mr-5">
						<div className="col">
							<input 
								type="text" 
								value={inputCity} 
								onChange={event => setInputCity(event.target.value)} 
								placeholder="City..."
								className="form-control mr-2"
							/>
						</div>
						<div className="col">
							<input 
								type="text" 
								value={inputCountry} 
								onChange={event => setInputCountry(event.target.value)} 
								placeholder="Country..."
								className=" form-control ml-2"
							/>
						</div>
					</div>
					<div className="row justify-content-center mr-5 mt-3">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
				
			</div>
		</Jumbotron>
	)
}