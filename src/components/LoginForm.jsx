import React, { useState } from 'react';
import { logInUser } from '../utils/userService';

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
			logInUser(username);
			// logInUser(user);  Now it's Object Object so possible that I can get the id straight from the user object instead
		} else {
			console.log('Wrong username or password');
		}
	};

	return (
		<div className="container">
			<div className="container__side-background">&nbsp;</div>
			<form className="login-form" onSubmit={handleLogin}>
				<div className="login">
					<h2 className="login__item login__title">User Login</h2>

					<label htmlFor="login-name" className="login__item">
						Name
					</label>
					<input
						type="text"
						className="login__item login__input--name"
						id="login-name"
						placeholder="name"
						required
						value={username}
						onChange={handleUsernameChange}
					/>

					<label htmlFor="login-password" className="login__item">
						Password
					</label>
					<input
						type="password"
						className="login__item login__input--password"
						id="login-password"
						placeholder="password"
						required
						value={password}
						onChange={handlePasswordChange}
					/>

					<button type="submit" className="login__item login__btn">
						Login
					</button>
				</div>
			</form>
			<div className="container__bottom-background">&nbsp;</div>
		</div>
	);
}

export default LoginForm;
