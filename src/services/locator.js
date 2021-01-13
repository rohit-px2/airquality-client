import axios from 'axios'

const baseUrl = '/api/location'

/**
	Gets the user's location based on their IP.
*/
async function getLocation() {
	const response = await axios.get(baseUrl)
    return response.data
}

const locatorService = {getLocation}

export default locatorService