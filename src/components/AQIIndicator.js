import React, {useEffect, useState} from 'react'
import { Jumbotron, Card, CardBody } from 'reactstrap'
const healthMessages = {
	"Safe": "The air quality is very good. Air pollution poses very little to no risk to anyone.",
	"Moderately Safe": "The air quality is moderately safe. Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
	"Moderately Unhealthy": "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
	"Unhealthy": "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion",
	"Very Unhealthy": "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.",
	"Hazardous": "Everyone should avoid all outdoor exertion." 
}

const Colors = {
	green: "#43a047",
	yellow: "#fdd835",
	orange: "#f4511e",
	red: "#e53935",
	violet: "#5e35b1",
	"mahogany": "#C04000"
}

const healthColor = {
	"Safe": Colors.green,
	"Moderately Safe": Colors.yellow,
	"Moderately Unhealthy": Colors.orange,
	"Unhealthy": Colors.red,
	"Very Unhealthy": Colors.violet,
	"Hazardous": Colors.mahogany // mahogany
}


export default function AQIIndicator({aqi}) {
	const [health, setHealth] = useState('')

	function findHealth() {
		if(aqi === null) return;
		else if(aqi <= 50) setHealth("Safe");
		else if(aqi > 50 && aqi <= 100) setHealth("Moderately Safe");
		else if(aqi > 100 && aqi <= 150) setHealth("Moderately Unhealthy");
		else if(aqi > 150 && aqi <= 200) setHealth("Unhealthy");
		else if(aqi > 200 && aqi <= 300) setHealth("Very Unhealthy");
		else if(aqi > 300) setHealth("Hazardous");
	}
	useEffect(findHealth, [aqi])

	function getMessage() {
		return healthMessages[health]
	}

	const backgroundStyle = {
		backdropFilter: "blur(6px)",
	}

	const healthColorStyle = {
		backgroundColor: healthColor[health]
	}


	return(
		<Jumbotron style={backgroundStyle} className="text-white transparent">
			<Card style={healthColorStyle} className="mr-auto p-3">
				<CardBody>
					<h2 className="text-dark text-center">{health}</h2>
				</CardBody>
			</Card>
			<p className="h4 ml-auto p-3">{getMessage()}</p>
		</Jumbotron>
	)
}