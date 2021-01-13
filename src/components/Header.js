import React, {useState} from 'react'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'

export default function Header({user, clearUser, setUser}) {
	const [isLoginOpen, setLoginOpen] = useState(false)
	const [isSignupOpen, setSignupOpen] = useState(false)

	function toggleLogin() {
		console.log("Toggling login...")
		setLoginOpen(!isLoginOpen)
	}

	function toggleSignup() {
		console.log("Toggling signup...")
		setSignupOpen(!isSignupOpen)
	}

	function signUpOrName() {
		if(user === null || user === undefined) {
			return (
				<button className="btn btn-outline-light rounded" onClick={() => toggleSignup()}>
						<span className="fa fa-address-card fa-lg" /> Sign Up
				</button>
			)
		}
		else {
			return (
				<button className="btn btn-outline-light rounded" onClick={() => logOut()}>
					Log Out
				</button>
			)
		}
	}

	function logOut() {
		clearUser()
		window.location.replace("/")
	}

	function logButton() {
		if(user === null || user === undefined) {
			return (
				<button className="btn btn-outline-light rounded" onClick={() => toggleLogin()}>
						<span className="fa fa-sign-in fa-lg" /> Login
				</button>
			)
		}
		else {
			return (
				<span className="text-light">{user.username}</span>
			)
		}
	}

	return(
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<ul className="nav">
					<li className="nav-item">
						<a href="/" className="navbar-brand text-light">AQInfo</a>
					</li>
					<li className="nav-item">
						<a href="/dashboard" className="nav-link active text-light">Dashboard</a>
					</li>
				</ul>
				<ul className="nav">
					<li className="nav-item px-2">
						{logButton()}
					</li>
					<li className="nav-item">
						{signUpOrName()}
					</li>
				</ul>
			</div>
			<LoginModal
				isOpen={isLoginOpen}
				toggleModal={toggleLogin}
				setUser={setUser}
			/>
			<SignupModal
				isOpen={isSignupOpen}
				toggleModal={toggleSignup}
			/>
		</nav>
	)
}