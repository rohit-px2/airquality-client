import React, {useState} from 'react'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import { useHistory }from 'react-router-dom'
import userService from '../services/userCreation'
import * as App from '../App'

/**
	A signup modal.
	@param isOpen
	Whether the modal is open or not.
	@param toggleModal
	A function to toggle the SignupModal on or off.
	@param createUser
	A function to create the user.
*/
export default function SignupModal({isOpen, toggleModal, createUser}) {
	let history = useHistory()
	const [message, setMessage] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const CLOSE_UPON_SUCCESS_TIME = 500
	function handleSignup(event) {
		event.preventDefault()
		userService
			.createUser({username, password})
			.then(response => {
				setMessage("Successfully signed up!")
				setTimeout(() => window.location.replace("/"), CLOSE_UPON_SUCCESS_TIME)
			})
			.catch(error => {
				if(error.response.status === 409) {
					setError("That username is taken.")
				}
				else if(error.response.status === 500) {
					setError("Unable to sign up right now. Please try later.")
				}
			})
	}

	/**
		Clears the state of the component. This is used when the user clicks out of the modal.
	*/
	function clearState() {
		setUsername('')
		setPassword('')
		setError('')
		setMessage('')
	}

	/**
		Closes the modal.
	*/
	function closeModal() {
		clearState()
		toggleModal()
	}
	
	return (
		<Modal isOpen={isOpen} toggle={closeModal}>
			<ModalHeader toggle={closeModal}>Sign Up</ModalHeader>
			<p className="text-success text-center">{message}</p>
			<p className="text-danger text-center">{error}</p>
			<ModalBody>
				<form onSubmit={event => handleSignup(event)}>
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
						<button className="btn btn-success rounded" type="submit">Sign Up</button>
					</div>
				</form>
			</ModalBody>
		</Modal>
	)
}