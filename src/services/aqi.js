import axios from 'axios'

const baseUrl = `http://localhost:3002/api/info`

async function getAQI(location) {
	return axios.get(`${baseUrl}/${location.country}/${location.city}`)
}

const aqiService = {
	getAQI,
}

export default aqiService