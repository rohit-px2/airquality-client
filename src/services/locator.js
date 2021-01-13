import axios from 'axios'

const baseUrl = '/api/location'
// Using the IP-API api.
// Get user's city and country from their IP.
async function getLocation() {
	const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
}

const locatorService = {getLocation}

export default locatorService