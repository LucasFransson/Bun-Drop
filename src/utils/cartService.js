// class CartService
// I WANT to encapsulate this inside a class, but everything else in react seems to be more functionall so I will try that paradigm/approach for now.
// If I don't like it/fully understand it, Change to a more OOP-minded approach, encapsulate with a class, make the functions static and export the whole class.

export function getCart() {
	const cart = localStorage.getItem('cart');
	return cart ? JSON.parse(cart) : []; // IF JSON.parse(cart)== true return it, else return empty array
	// const cart = JSON.parse(localStorage.getItem('cart')) || [];
}

export function addToCart(item) {
	const cart = getCart();
	cart.push(item);
	localStorage.setItem('cart', JSON.stringify(cart));
}

export function saveCart(cart) {
	localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(itemId) {
	const cart = getCart();
	cart = cart.filter((item) => item.id !== itemId); // Iterate / filter the current cart(array) for all items with NOT the same Id as the passed Id, then assign the value of the filtered array to itself. Aka all matching id's gets removed
	localStorage.setItem('cart', JSON.stringify(cart));
}

export function clearCart() {
	localStorage.removeItem('cart');
}

// export function removeFromCart(itemId) {
// 	const cart = getCart();
// 	const itemIndex = cart.findIndex((item) => item.id === itemId);
// 	if (itemIndex !== -1) {
// 		cart[itemIndex].quantity -= 1;
// 		if (cart[itemIndex].quantity === 0) {
// 			cart.splice(itemIndex, 1);
// 		}
// 	}
// 	localStorage.setItem('cart', JSON.stringify(cart));
// }

// export function addToCart(item) {
// 	const cart = getCart();
// 	const existingItemIndex = cart.findIndex(
// 		(cartItem) => cartItem.id === item.id
// 	);
// 	if (existingItemIndex !== -1) {
// 		cart[existingItemIndex].quantity += 1;
// 	} else {
// 		cart.push({ ...item, quantity: 1 });
// 	}
// 	localStorage.setItem('cart', JSON.stringify(cart));
// }
