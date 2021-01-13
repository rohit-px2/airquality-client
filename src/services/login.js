import axios from 'axios'
const baseUrl = '/api/login'

/**
	Logs in the user.
*/
async function login(credentials) {
	const response = await axios.post(baseUrl, credentials)
	return response
}

const loginService = {login}


export default loginService