// class CartService
// I WANT to encapsulate this inside a class, but everything else in react seems to be more functionall so I will try that paradigm/approach for now.
// If I don't like it/fully understand it, Change to a more OOP-minded approach, encapsulate with a class, make the functions static and export the whole class.

export function getCart() {
	const cart = localStorage.getItem('cart');
	return cart ? JSON.parse(cart) : []; // IF JSON.parse(cart)== true return it, else return empty array
	// const cart = JSON.parse(localStorage.getItem('cart')) || [];
}

export function saveCart(cart) {
	localStorage.setItem('cart', JSON.stringify(cart));
}

export function clearCart() {
	localStorage.removeItem('cart');
}

export function getTotalPrice() {
	const cart = getCart();
	return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function addToCart(item) {
	const cart = getCart();
	const existingItemIndex = cart.findIndex(
		(cartItem) => cartItem.id === item.id
	);
	if (existingItemIndex !== -1) {
		cart[existingItemIndex].quantity += Number(item.quantity);
	} else {
		cart.push({ ...item, quantity: Number(item.quantity) });
	}
	localStorage.setItem('cart', JSON.stringify(cart));
	return cart; // return updated cart
}
export function removeFromCart(itemId) {
	const cart = getCart();
	const updatedCart = cart.filter((item) => item.id !== itemId);

	localStorage.setItem('cart', JSON.stringify(updatedCart));
	return updatedCart;
}

export function increaseQuantity(item) {
	const cart = getCart();
	const existingItemIndex = cart.findIndex(
		(cartItem) => cartItem.id === item.id
	);
	if (existingItemIndex !== -1) {
		// If the item already exists in the cart, increment its quantity
		cart[existingItemIndex].quantity += 1;
	}
	localStorage.setItem('cart', JSON.stringify(cart));
	return cart; // return updated cart
}

export function decreaseQuantity(itemId) {
	const cart = getCart();
	const itemIndex = cart.findIndex((item) => item.id === itemId);
	if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
		cart[itemIndex].quantity -= 1;
	}
	localStorage.setItem('cart', JSON.stringify(cart));
	return cart; // return updated cart
}
