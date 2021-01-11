import React, {useState} from 'react'

export default function Header({setLocation, initialCity, initialCountry}) {
	const [city, setCity] = useState(initialCity || '')
	const [country, setCountry] = useState(initialCountry || '')

	function handleSubmit() {
		console.log("City is", city)
		console.log("Country is", country)
		setLocation({city, country})
	}

	return(
		<nav className="navbar navbar-light bg-dark">
			<div className="container-fluid">
				<a href="/" className="navbar-brand text-light">AQInfo</a>
				<form onSubmit={handleSubmit} className="navbar-form navbar-left ml-auto">
				<input
					className="m-1 rounded"
					type="text" value={city} 
					placeholder={`${initialCity}...`} 
					onChange={event => setCity(event.target.value)} 
				/>
				<input
					className="m-1 rounded"
					type="text" 
					value={country} 
					placeholder={`${initialCountry}...`} 
					onChange={event => setCountry(event.target.value)} 
				/>
				<button className="btn btn-success" type="submit">Submit</button>
			</form>
			</div>
		</nav>
	)
}