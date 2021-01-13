import axios from 'axios'

const baseUrl = `http://localhost:3002/api/info`
const addDashboardUrl = 'http://localhost:3002/api/users/location'

let token = null

function setToken(newToken) {
	token = `bearer ${newToken}`
}

async function getAQI(location) {
	const response = await axios.get(`${baseUrl}/${location.country}/${location.city}`)
	console.log(response)
	return response.data
}

/**
	Adds the new location to the user's profile.
*/
async function create(location) {
	const config = {
		headers: {Authorization: token}
	}
	const response = await axios.post(addDashboardUrl, location, config)
	return response
}

const aqiService = {
	getAQI,
	setToken,
	create
}

export default aqiService