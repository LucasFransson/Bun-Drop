import React, { useContext } from 'react';
import { CartContext } from '../utils/CartContext';
import Button from './button';
import {
	increaseQuantity,
	decreaseQuantity,
	getTotalPrice,
	removeFromCart,
} from '../utils/cartService';

function Cart() {
	const { cart, setCart } = useContext(CartContext);

	const handleRemoveFromCart = (id) => {
		const updatedCart = removeFromCart(id);

		setCart(updatedCart);
	};

	const handleIncreaseQuantity = (item) => {
		const updatedCart = increaseQuantity(item);
		setCart(updatedCart);
	};

	const handleDecreaseQuantity = (item) => {
		if (item.quantity === 1) {
			handleRemoveFromCart(item.id);
		} else {
			const updatedCart = decreaseQuantity(item.id);
			setCart(updatedCart);
		}
	};

	const totalPrice = getTotalPrice();
	return (
		<div className="cart">
			<div className="cart__left-container">
				<h2 className="cart__heading">CART</h2>
				<ul className="cart-list">
					{cart.map((item) => (
						<li key={item.id} className="cart-list__item">
							{item.name} - ${item.price} x {item.quantity} = $
							{item.price * item.quantity}
							<button
								onClick={() => handleRemoveFromCart(item.id)}
								className="cart-list__item--btn-remove"
							>
								Remove from cart
							</button>
							<Button
								text="+"
								onClick={() => handleIncreaseQuantity(item)}
								styleClass="btn btn__quantity--increase"
							></Button>
							<Button
								text="-"
								onClick={() => handleDecreaseQuantity(item)}
								styleClass="btn btn__decrease-quantity"
								disabled={item.quantity <= 0}
							></Button>
						</li>
					))}
				</ul>
			</div>
			<div className="cart__right-container">
				{/* <h3>Total: ${totalPrice}</h3> */}
				<h2 className="cart-total__heading">
					Total: {cart.length > 0 ? `$${totalPrice}` : 'Cart is empty'}
				</h2>
				<button
					className="cart-total__button-confirm"
					disabled={cart.length <= 0}
				>
					CONFIRM
				</button>
			</div>
		</div>
	);
}

export default Cart;
