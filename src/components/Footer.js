import React from 'react'

/**
	Footer: The footer component of the AQInfo website. The color is transparent and contains attributions,
	as well as links (with more to be potentially added).
	
*/
export default function Footer() {
	return (
		<footer className="container py-5 transparent">
			<h2 className="text-center text-white">Information Provided by the World Air Quality Index</h2>
			<h3 className="m-4 text-center text-white">
				Website made by
				<a href="https://github.com/rohit-px2" className="text-decoration-none">
					  {' Rohit Pradhan'}
				</a>
			</h3>
		</footer>
	)
}