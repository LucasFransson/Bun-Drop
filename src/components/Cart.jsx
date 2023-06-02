import React, { useContext } from 'react';
import { CartContext } from '../utils/CartContext';

function Cart() {
	const { cart, setCart } = useContext(CartContext);

	const handleRemoveFromCart = (itemId) => {
		setCart(cart.filter((item) => item.id !== itemId));
	};

	return (
		<div>
			<h2>Your Cart</h2>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						{item.name} - ${item.price}
						<button onClick={() => handleRemoveFromCart(item.id)}>
							Remove from cart
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Cart;
