// Change this, use the new usePost hook instead!
export function registerUser(username, password) {
	return fetch('http://localhost:7000/users', {
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

export function getUserName() {
	const username = localStorage.getItem('username');
	return username;
}

// REFACTOR THIS ASAP, MESSY CODE & REALLY STUPID USE OF LOCALSTORAGE!!   Check if possible to just add object in localstorage instead
export async function getUserId(username) {
	try {
		const response = await fetch(`http://localhost:7000/users`);
		const users = await response.json();
		const user = users.find((user) => user.name === username);
		if (!user) {
			throw new Error(`User with username ${username} not found`);
		}
		return user.id;
	} catch (error) {
		console.error('Error:', error);
	}
}

// FIX so that it cant add duplicates
export async function addFavorite(userId, item) {
	const response = await fetch(`http://localhost:7000/users/${userId}`);
	const user = await response.json();

	const foundProduct = user.favorites.find((product) => product === item); // SHOULD BE ITEM.ID AND PRODUCT.ID, THIS IS WRONG BECAUSE THE REST OF THE CODE IS WRONG FIX THIS
	if (!foundProduct) {
		user.favorites.push(item);

		return fetch(`http://localhost:7000/users/${userId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
	} else {
		return Promise.reject(new Error('Product already in favorites'));
	}
}

export function logOutUser() {
	localStorage.removeItem('username');
	localStorage.removeItem('password');
	window.location.href = '/'; // Redirect to home I hope, test functionallity
}

export function logInUser(username, password) {
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
	window.location.href = 'index.html';
}
