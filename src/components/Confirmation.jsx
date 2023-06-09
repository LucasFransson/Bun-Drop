import React, { useEffect, useState } from 'react';
import { getCart, clearCart } from '../utils/cartService';
import { addOrder } from '../utils/userService';

function Confirmation() {
	// const cart = getCart();
	// addOrder(cart).then(() => {
	// 	clearCart();
	// });

	// const [cart, setCart] = useState(getCart());
	// const [order, setOrder] = useState(null);

	// useEffect(() => {
	// 	setCart(getCart());
	// }, []);

	// useEffect(() => {
	// 	setOrder(addOrder(cart));
	// }, [cart]);

	// var for holding the value of the cart/order
	const [cart, setCart] = useState(getCart());
	useEffect(() => {
		// add order(items in the cart) to the user in the database
		addOrder(cart).then(() => {
			// clear the cart
			clearCart(); // completely clear the cart by removing the entire cart from local storage. TEST so this doesnt happen until after the confirmation page is rendered
			setCart([]); //update the state
		});
	}, [cart]);

	// For some reason I have to call the clearCart function here because the cart is not being cleared otherwise.
	// This was not a problem before i updated the order function in userservice.js
	// and i do not have the time to fix it now.
	clearCart(); //clear the cart (TESTING)
	return (
		<div>
			<h1>Order Confirmation</h1>

			{cart.map((item) => (
				<div key={item.id}>
					<h2>{item.name}</h2>
					<p>Price: {item.price}</p>
					<p>Quantity: {item.quantity}</p>
				</div>
			))}

			<h2>
				Total:{' '}
				{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
			</h2>
		</div>
	);
}

export default Confirmation;
