import React, {useState} from 'react'

export default function MainPage({info, setLocation, initialCountry, initialCity}) {
	const [city, setCity] = useState(initialCity || '')
	const [country, setCountry] = useState(initialCountry || '')

	function handleSubmit() {
		setLocation({city, country})
	}

	return (
		<div className="container">
			<h2>Data for {info.city}, {info.country}</h2>
	        <p>{JSON.stringify(info)}</p>
			<form onSubmit={handleSubmit}>
				<input type="text" value={city} onChange={event => setCity(event.target.value)} placeholder="City..."/>
				<input type="text" value={country} onChange={event => setCountry(event.target.value)} placeholder="Country..."/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
