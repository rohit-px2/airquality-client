import axios from 'axios'
const baseUrl = '/api/users'

async function createUser(credentials) {
	const response = await axios.post(baseUrl, credentials)
	return response
}

const userService = { createUser }

export default userService