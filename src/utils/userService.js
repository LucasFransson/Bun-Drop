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

// function logInUser(username) {
// 	localStorage.setItem('username');

// 	window.location.href = 'index.html';
// }

// export function getUserId() {
// 	const username = localStorage.getItem('username');
// 	const user = fetch(`http://localhost:3000/users/${username}`).then(
// 		(response) => response.json()
// 	);
// 	const userId = user.id;
// 	return userId;
// }

// export function getUserId(username) {
// 	const user = fetch(`http://localhost:3000/users/${username}`).then(
// 		(response) => response.json()
// 	);
// 	const userId = user.id;
// 	return userId;
// }

// export async function getUserId(username) {
// 	try {
// 		console.log(username); // Add this line
// 		const response = await fetch(`http://localhost:3000/users/${username}`);
// 		const user = await response.json();
// 		console.log(user); // Add this line
// 		const userId = user.id;
// 		return userId;
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

export function getUserName() {
	const username = localStorage.getItem('username');
	return username;
}

// REFACTOR !!! Check if possible to just add object in localstorage instead
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

	user.favorites.push(item);

	return fetch(`http://localhost:7000/users/${userId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});
}

//export function addFavorite(userId, item) {
// 	return fetch(`http://localhost:7000/users/${userId}/favorites`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			item: item,
// 		}),
// 	});
// }

// export async function addFavorite(userId, item) {
//     try {
//         const response = await fetch(`http://localhost:7000/users/${userId}/favorites`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 item: item,
//             }),
//         });
//         const user = await response.json();
//         return user;
//     } catch (error) {
//         console.error('Error:', error);
//     }

// export function addFavorite(userId, item) {
// 	return fetch(`http://localhost:3000/users/${userId}/favorites`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			item: item,
// 		}),
// 	});
// }

// export async function addFavorite(userId, item) {
//     try {
//         const response = await fetch(`http://localhost:7000/users/${userId}/favorites`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 item: item,
//             }),
//         });
//         const user = await response.json();
//         return user;
//     } catch (error) {
//         console.error('Error:', error);
//     }}

export function logOutUser(username) {
	localStorage.removeItem('username');
	localStorage.removeItem('password');
	window.location.href = 'index.html'; // Redirect to index.html I hope, test functionallity
}

export function logInUser(username, password) {
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
	window.location.href = 'index.html';
}
