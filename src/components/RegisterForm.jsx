// This should be improved in the future, especially validation errors/messages, but don't have time for that atm
// also moved to pages

import React, { useState } from 'react';
import { registerUser } from '../utils/userService'; // You'll need to implement this function

function RegisterForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match'); // Dont have time to implement a nice error message like before
			return;
		}

		const user = {
			name: username,
			password: password,
		};

		try {
			await registerUser(user);
			console.log(`${username} has registered`);
		} catch (error) {
			alert('Failed to register', error); // Dont have time to implement a nice error message like before
		}
	};

	return (
		<>
			<div className="register">
				<form className="register__form" onSubmit={handleRegister}>
					<h2 className="register__heading">User Registration</h2>
					<div className="register__group">
						<div className="register__group--name">
							<label htmlFor="register-name" className="register__label--name">
								Name
							</label>
							<input
								type="text"
								className="register__input--name"
								id="register-name"
								placeholder="name"
								required
								value={username}
								onChange={handleUsernameChange}
							/>
						</div>
						<div className="register__group--password">
							<label
								htmlFor="register-password"
								className="register__label--password"
							>
								Password
							</label>
							<input
								type="password"
								className="register__input--password"
								id="register-password"
								placeholder="password"
								required
								value={password}
								onChange={handlePasswordChange}
							/>
						</div>
						<div className="register__group--confirm-password">
							<label
								htmlFor="register-confirm-password"
								className="register__label--confirm-password"
							>
								Confirm Password
							</label>
							<input
								type="password"
								className="register__input--confirm-password"
								id="register-confirm-password"
								placeholder="confirm password"
								required
								value={confirmPassword}
								onChange={handleConfirmPasswordChange}
							/>
						</div>
					</div>
					<button type="submit" className="register__button--register">
						Register
					</button>
				</form>
			</div>
		</>
	);
}
export default RegisterForm;
