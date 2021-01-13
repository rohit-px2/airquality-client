import axios from 'axios'
const baseUrl = '/api/users'

/**
	Posts a user with the new credentials. This can throw a 409 error (conflict).
*/
async function createUser(credentials) {
	const response = await axios.post(baseUrl, credentials)
	return response
}

const userService = { createUser }

export default userService