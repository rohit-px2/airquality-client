import axios from 'axios'
const baseUrl = `/api/info`
const addDashboardUrl = '/api/users/location'

let token = null

/**
	Sets the token to newToken.
*/
function setToken(newToken) {
	token = `bearer ${newToken}`
}

/**
	Gets the AQI data corresponding to location.
	@param {Object} location 
	The location to get the AQI data from.
*/
async function getAQI(location) {
	const response = await axios.get(`${baseUrl}/${location.country}/${location.city}`)
	return response.data
}

/**
	Adds the new location to the user's profile.
	@param location
	The location to add into the user's profile.
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