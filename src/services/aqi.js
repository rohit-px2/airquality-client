import axios from 'axios'

const baseUrl = `http://localhost:3002/api/info`

async function getAQI(location) {
	const response = await axios.get(`${baseUrl}/${location.country}/${location.city}`)
	console.log(response)
	return response.data
}

const aqiService = {
	getAQI,
}

export default aqiService