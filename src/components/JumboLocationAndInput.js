import React, {useState} from 'react'
import {Jumbotron} from 'reactstrap'

export default function JumboLocationAndInput({city, country, setLocation}) {
	const [inputCity, setInputCity] = useState('')
	const [inputCountry, setInputCountry] = useState('')

	function handleSubmit() {
		setLocation({
			city: inputCity,
			country: inputCountry
		})
	}
	const titleStyle = {
		fontSize: "4rem",
	}

	return (
		<Jumbotron className="p-5 m-0 transparent text-white">
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