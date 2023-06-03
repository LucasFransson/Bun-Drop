import React, { useState } from 'react';

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
		} else {
			console.log('Wrong username or password');
		}
	};

	return (
		<div className="container">
			<form className="login-form" onSubmit={handleLogin}>
				<div className="login">
					<h2 className="login__title">User Login</h2>

					<label htmlFor="login-name">Name</label>
					<input
						type="text"
						className="login__input--name"
						id="login-name"
						placeholder="name"
						required
						value={username}
						onChange={handleUsernameChange}
					/>

					<label htmlFor="login-password">Password</label>
					<input
						type="password"
						className="login__input--password"
						id="login-password"
						placeholder="password"
						required
						value={password}
						onChange={handlePasswordChange}
					/>

					<button type="submit" className="login__btn">
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
