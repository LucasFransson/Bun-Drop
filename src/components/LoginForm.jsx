// This should be improved in the future, especially validation errors/messages, but don't have time for that atm
// also moved to pages
import React, { useState } from 'react';
import { logInUser } from '../utils/userService';
import { Link } from 'react-router-dom';

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:7000/users');
		const users = await response.json();

		const user = users.find(
			(user) => user.name === username && user.password === password
		);

		if (user) {
			console.log(`${username} have logged in`);
			//logInUser(username);
			logInUser(username, user); // Now it's Object Object so possible that I can get the id straight from the user object instead
		} else {
			console.log('Wrong username or password');
		}
	};

	return (
		<>
			<div className="login">
				<form className="login__form" onSubmit={handleLogin}>
					<h2 className="login__heading">User Login</h2>
					<div className="login__group">
						<div className="login__group--name">
							<label htmlFor="login-name" className="login__label--name">
								Name
							</label>
							<input
								type="text"
								className="login__input--name"
								id="login-name"
								placeholder="name"
								required
								value={username}
								onChange={handleUsernameChange}
							/>
						</div>{' '}
						<div className="login__group--password">
							<label
								htmlFor="login-password"
								className="login__label--password"
							>
								Password
							</label>

							<input
								type="password"
								className="login__input--password"
								id="login-password"
								placeholder="password"
								required
								value={password}
								onChange={handlePasswordChange}
							/>
						</div>
					</div>
					<button type="submit" className="login__button--login">
						Login
					</button>
					<div className="register-link__container">
						<label
							htmlFor="register-link"
							className="register-link__container--label"
						>
							Not a user?
						</label>
						<Link
							to={'/register'}
							id={'register-link'}
							className="register-link__container--link"
						>
							Register here
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default LoginForm;
