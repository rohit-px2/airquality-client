import React, {useState} from 'react'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import loginService from '../services/login'
import { useHistory } from 'react-router-dom'

/**
	The login modal.
	@param {boolean} isOpen
	Whether the modal is open or not.
	@param {function} toggleModal
	Function that toggles the modal on and off.
	@param {function} setUser
	Function that updates the user.
*/
export default function LoginModal({isOpen, toggleModal, setUser}) {
	let history = useHistory()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	function handleLogin(event) {
		event.preventDefault()
		loginService
			.login({username, password})
			.then(response => {
				console.log(response.data)
				window.localStorage.setItem('loggedAqiUser', JSON.stringify(response.data))
				setUser(response.data)
				window.location.replace("/")
			})
			.catch(error => {
				setError(error.response.data.error)
			})
	}
	function clearState() {
		setUsername('')
		setPassword('')
		setError(null)
	}

	function closeModal() {
		clearState()
		toggleModal()
	
	}
	return (
		<Modal isOpen={isOpen} toggle={closeModal}>
			<ModalHeader toggle={closeModal}>Login</ModalHeader>
			<p className="text-danger text-center">{error ? error : ''}</p>
			<ModalBody>
				<form onSubmit={event => handleLogin(event)}>
					<label htmlFor="username">Username</label>
					<input 
						className="form-control" 
						onChange={event => setUsername(event.target.value)}
						type="text" 
						value={username} 
						placeholder="Username" />
					<br />
					<label htmlFor="password">Password</label>
					<input 
						className="form-control" 
						onChange={event => setPassword(event.target.value)}
						type="password" 
						value={password} 
						placeholder="Password" />
					<br />
					<div className="d-flex justify-content-center">
						<button className="btn btn-success rounded" type="submit">Login</button>
					</div>
				</form>
			</ModalBody>
		</Modal>
	)
}