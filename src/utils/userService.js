// Change this, use the new usePost hook instead!
export function registerUser(username, password) {
	return fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: username,
			password: password,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.error) {
				alert(data.error);
			} else {
				logInUser(username, password);
			}
		});
}

// function logInUser(username) {
// 	localStorage.setItem('username');

// 	window.location.href = 'index.html';
// }

function logOutUser(username) {
	localStorage.removeItem('username');
	localStorage.removeItem('password');
	window.location.href = 'index.html'; // Redirect to index.html I hope, test functionallity
}

function logInUser(username, password) {
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
	window.location.href = 'index.html';
}
