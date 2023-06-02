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
