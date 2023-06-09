// There is a lot of seemingly unnecessary code here, but it is because I first didnt want to store the password of the user as a localstorage item
// So instead I just stored the username, hence I had to make functions for getting the userId from the username, getting the favorites from the user, etc.
// I decided now however that I will store the entire object to make the code more readable and less messy, so I will refactor this code later, for now I will keep it as it is and let some of the old code remain.

// Change this, use the new usePost hook instead!
export async function registerUser(username, password) {
	const response = await fetch('http://localhost:7000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: username,
			password: password,
		}),
	});
	const data = await response.json();
	if (data.error) {
		alert(data.error);
	} else {
		logInUser(username, password);
	}
}

export function getUserName() {
	const username = localStorage.getItem('username');
	return username;
}

// User OBJECT Code
export async function addFavorite(item, callback) {
	const user = JSON.parse(localStorage.getItem('user'));

	const foundProduct = user.favorites.find((product) => product.id === item.id);
	if (!foundProduct) {
		user.favorites.push(item);

		const response = await fetch(`http://localhost:7000/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(user));
			callback(); // update the local state
		} else {
			return Promise.reject(new Error('Failed to add favorite'));
		}
	} else {
		return Promise.reject(new Error('Product already in favorites'));
	}
}

// User OBJECT Code
export async function removeFavorite(item, callback) {
	const user = JSON.parse(localStorage.getItem('user'));

	const foundProduct = user.favorites.find((product) => product.id === item.id);
	if (foundProduct) {
		user.favorites = user.favorites.filter((product) => product.id !== item.id);

		const response = await fetch(`http://localhost:7000/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(user));
			callback(); // update the local state
		} else {
			return Promise.reject(new Error('Failed to remove favorite'));
		}
	} else {
		return Promise.reject(new Error('Product not in favorites'));
	}
}

// User OBJECT Code
export async function getFavorites() {
	const user = JSON.parse(localStorage.getItem('user'));
	return user.favorites;
}

// User OBJECT Code
export async function isItemFavorite(item) {
	const user = JSON.parse(localStorage.getItem('user'));

	const foundProduct = user.favorites.find((product) => product.id === item.id);
	if (foundProduct) {
		return true;
	} else {
		return false;
	}
}

// Add Order object conntected to user to database

export async function addOrder(cart, callback) {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user) {
		// generate a random number for the order id (This is not the way to do this, but im doing it here to illustrate an unique order id )
		const orderId = Math.floor(Math.random() * 1000000);

		// get the total price of the cart items
		const totalPrice = cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);

		//get the current time in the IS0 format (y-m-d h:m:s)
		const currentTime = new Date().toISOString();

		// iterate over the cart items to create new order item objects
		const items = cart.map((item) => ({
			id: item.id,
			name: item.name,
			quantity: item.quantity,
			price: item.price,
		}));
		//create an order object
		const newOrder = {
			orderId: orderId,
			items: items,
			totalPrice: totalPrice,
			time: currentTime,
		};
		// Push the new order into the users orders array
		user.orders.push(newOrder);

		const response = await fetch(`http://localhost:7000/users/${user.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(user));
			callback(); // update the local state
		} else {
			return Promise.reject(new Error('Failed to add order'));
		}
	}
	return Promise.reject(new Error('User not logged in. Failed to add order'));
}

export function getOrders() {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user) {
		return user.orders;
	}
	return [];
}

export function logOutUser() {
	localStorage.removeItem('username');
	localStorage.removeItem('user');
	localStorage.removeItem('loggedIn'); // sets loggedIn to "false" (not really, it removes the item instead, check if this works)
	window.location.href = '/'; // Redirect to home I hope, test functionallity
}

// FETCH THE USER FROM THE DATABASE AND COMPARE THE PASSWORDS, IF THEY MATCH, LOG IN THE USER
export async function logIn(username, password) {
	try {
		const response = await fetch(`http://localhost:7000/users`);
		const users = await response.json();
		const user = users.find((user) => user.name === username);
		if (!user) {
			throw new Error(`User with username ${username} not found`); // DEBUGGING PURPOSE ONLY, REMOVE THIS LATER!!!
		}
		if (user.password === password) {
			logInUser(username, user);
		} else {
			throw new Error('Wrong password'); // DEBUGGING PURPOSE ONLY, REMOVE THIS LATER!!!
		}
	} catch (error) {
		console.error('Error:', error);
	}
}

// CHANGE NAME TO CLARIFY DIFFERENCES
export function logInUser(username, user) {
	// yeah, this is NOT secure, but it doesnt matter in this app
	localStorage.setItem('username', username);
	localStorage.setItem('user', JSON.stringify(user));
	// localStorage.setItem('password', password); // is there any reason to store the password??
	localStorage.setItem('loggedIn', true);
	window.location.href = 'user'; // maybe should be the home instead?
}

// User NON-OBJECT Code
// REFACTOR THIS ASAP, MESSY CODE & REALLY STUPID USE OF LOCALSTORAGE FOR THIS APP!!   Check if possible to just add object in localstorage instead
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
// User NON-OBJECT Code
// export async function addFavorite(userId, item) {
// 	const response = await fetch(`http://localhost:7000/users/${userId}`);
// 	const user = await response.json();

// 	const foundProduct = user.favorites.find((product) => product.id === item.id); // SHOULD BE ITEM.ID AND PRODUCT.ID, THIS IS WRONG BECAUSE THE REST OF THE CODE IS WRONG FIX THIS, THIS IS DUMB
// 	if (!foundProduct) {
// 		user.favorites.push(item);

// 		return fetch(`http://localhost:7000/users/${userId}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(user),
// 		});
// 	} else {
// 		return Promise.reject(new Error('Product already in favorites'));
// 	}
// }

// User NON-OBJECT Code
// export async function removeFavorite(userId, item) {
// 	const response = await fetch(`http://localhost:7000/users/${userId}`);
// 	const user = await response.json();

// 	const foundProduct = user.favorites.find((product) => product.id === item.id); // SHOULD STILL BE ITEM.ID AND PRODUCT.ID, THIS IS WRONG BECAUSE THE REST OF THE CODE IS WRONG FIX THIS, THIS IS DUMB
// 	if (foundProduct) {
// 		user.favorites = user.favorites.filter((product) => product.id !== item.id);
// 		return fetch(`http://localhost:7000/users/${userId}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(user),
// 		});
// 	} else {
// 		return Promise.reject(new Error('Product not in favorites'));
// 	}
// }

// User NON-OBJECT Code
// export async function getFavorites(userId) {
// 	const response = await fetch(`http://localhost:7000/users/${userId}`);
// 	const user = await response.json();
// 	return user.favorites;
// }

// User NON-OBJECT Code
// export async function isItemFavorite(userId, item) {
// 	const response = await fetch(`http://localhost:7000/users/${userId}`);
// 	const user = await response.json();
// 	const foundProduct = user.favorites.find((product) => product.id === item.id);
// 	if (foundProduct) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// User OBJECT Code
// export async function addFavorite(item) {
// 	const user = JSON.parse(localStorage.getItem('user'));

// 	const foundProduct = user.favorites.find((product) => product.id === item.id);
// 	if (!foundProduct) {
// 		user.favorites.push(item);

// 		return fetch(`http://localhost:7000/users/${user.id}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(user),
// 		});
// 	} else {
// 		return Promise.reject(new Error('Product already in favorites'));
// 	}
// }

// // User OBJECT Code
// export async function removeFavorite(item) {
// 	const user = JSON.parse(localStorage.getItem('user'));

// 	const foundProduct = user.favorites.find((product) => product.id === item.id);
// 	if (foundProduct) {
// 		user.favorites = user.favorites.filter((product) => product.id !== item.id);
// 		return fetch(`http://localhost:7000/users/${user.id}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(user),
// 		});
// 	} else {
// 		return Promise.reject(new Error('Product not in favorites'));
// 	}
// }
