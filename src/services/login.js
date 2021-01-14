import axios from 'axios'
const baseUrl = '/api/login'

/**
	Logs in the user in with the given credentials. Returns 401 if
	the user is not successfully authenticated.
*/
async function login(credentials) {
	const response = await axios.post(baseUrl, credentials)
	return response
}

const loginService = {login}


export default loginService