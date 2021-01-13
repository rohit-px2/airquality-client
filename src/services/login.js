import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/login'

async function login(credentials) {
	const response = await axios.post(baseUrl, credentials)
	return response
}

const loginService = {login}


export default loginService