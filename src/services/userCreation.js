import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/users'

async function createUser(credentials) {
	const response = await axios.post(baseUrl, credentials)
	return response
}

const userService = { createUser }

export default userService