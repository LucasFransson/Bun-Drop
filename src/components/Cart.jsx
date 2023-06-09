// NOTE TO SELF! There is a bug here that's causing the Cart component to still show the items of the cart after a purchase and the cart has been removed.
//Try updating the cart instead of removing it. NOPE, didn't work
// The Cart item from local storage is being sucessfully removed, and the cart renders fine if you refresh the page, but the cart component is not re-rendering after the cart is removed.

// FIXED! splitted the const { cart, setCart } = useContext(CartContext) and directly fetched the cart from local storage. This fixed the issue.
// STILL! Consider using useEffect instead of useState for the cart stat since this will allow the cart to be updated in real time in a very "reacty" way.
// HOWEVER, this causes the cart to be updated on every change, which may(?) be a performance issue (100% trivial in this case, but still). (Buut, it should only re-render when the quantity / items change here? so it doesnt matter?)
// AND fetching from localstorage will ensure that the cart is always up to date, IF it for some reason shouldnt re-render when the state changes.
// read more about best practices / how shit works behind the schens for deciding this. Will use fetching method for now.

import React, { useContext, useState } from 'react';
import { CartContext } from '../utils/CartContext';
import Button from './button';
import {
	increaseQuantity,
	decreaseQuantity,
	getTotalPrice,
	removeFromCart,
} from '../utils/cartService';
import { Link } from 'react-router-dom';
import { getCart } from '../utils/cartService';
import { ReactComponent as BinIcon } from '/public/svg/SVG/bin.svg';
import { ReactComponent as MinusIcon } from '/public/svg/SVG/minus.svg';
import { ReactComponent as PlusIcon } from '/public/svg/SVG/plus.svg';

function Cart() {
	// const { cart, setCart } = useContext(CartContext);
	const { setCart } = useContext(CartContext);
	const cart = getCart();

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

	const [paymentMethod, setPaymentMethod] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [cvc, setCvc] = useState('');

	return (
		<div className="cart">
			<div className="cart__left-container">
				<h2 className="cart__heading">CART</h2>
				<ul className="cart-list">
					{cart.map((item) => (
						<li key={item.id} className="cart-list__item">
							{item.name} - ${item.price} x {item.quantity} = $
							{item.price * item.quantity}
							<BinIcon
								onClick={() => handleRemoveFromCart(item.id)}
								className="cart-list__item--btn-remove"
							>
								Remove from cart
							</BinIcon>
							<PlusIcon
								text="+"
								onClick={() => handleIncreaseQuantity(item)}
								styleClass="btn btn__quantity--increase"
							></PlusIcon>
							<MinusIcon
								text="-"
								onClick={() => handleDecreaseQuantity(item)}
								styleClass="btn btn__decrease-quantity"
								disabled={item.quantity <= 0}
							></MinusIcon>
						</li>
					))}
				</ul>
			</div>
			{/* RIGHT SIDE CONTAINER / TOTAL CHECKOUT */}
			<div className="cart__right-container">
				<h2 className="cart-total__heading">
					Total: {cart.length > 0 ? `$${totalPrice}` : 'Cart is empty'}
				</h2>
				<div className="cart-checkout__checkbox-container">
					<label htmlFor="checkbox-swish">Swish</label>
					<input
						type="checkbox"
						id="checkbox-swish"
						checked={paymentMethod === 'swish'}
						onChange={() => setPaymentMethod('swish')}
					/>
					<label htmlFor="checkbox-card">Card</label>
					<input
						type="checkbox"
						id="checkbox-card"
						checked={paymentMethod === 'card'}
						onChange={() => setPaymentMethod('card')}
					/>
				</div>
				{/* SWISH PAYMENT METHOD */}
				{paymentMethod === 'swish' && (
					<div className="cart-checkout__swish-container">
						<label htmlFor="phone-number">Phone Number:</label>
						<input
							type="number"
							id="phone-number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>
				)}
				{/* CARD PAYMENT METHOD */}
				{paymentMethod === 'card' && (
					<div className="cart-checkout__card-container">
						<label htmlFor="card-number">Card Number:</label>
						<input
							type="number"
							id="card-number"
							maxLength="16"
							value={cardNumber}
							onChange={(e) => setCardNumber(e.target.value)}
						/>
						<label htmlFor="expiration-date">Expiry Date:</label>
						<input
							type="number"
							id="expiration-date"
							maxLength="4"
							value={expirationDate}
							onChange={(e) => setExpirationDate(e.target.value)}
						/>
						<label htmlFor="cvc">CVC:</label>
						<input
							type="number"
							id="cvc"
							maxLength="3"
							value={cvc}
							onChange={(e) => setCvc(e.target.value)}
						/>
					</div>
				)}
				{cart.length > 0 &&
				((paymentMethod === 'swish' && phoneNumber) ||
					(paymentMethod === 'card' &&
						cardNumber.length === 16 &&
						expiryDate.length === 4 &&
						cvc.length === 3)) ? (
					<Link to={'/confirmation'} className="cart-checkout__button-confirm">
						CONFIRM
					</Link>
				) : (
					<div className="cart-checkout__button-confirm--disabled">CONFIRM</div>
				)}
			</div>
		</div>
	);
}

export default Cart;

{
	/* <Link
					to={'/confirmation'}
					className="cart-total__button-confirm"
					disabled={cart.length <= 0}
				>
					CONFIRM
				</Link> */
}
{
	/* <button
					className="cart-total__button-confirm"
					disabled={cart.length <= 0}
				>
					CONFIRM
				// </button> */
}
{
	/* <div className="cart-total__checkbox-container">
	// <label htmlFor="checkbox-swish">Swish</label>
	// <input type="checkbox" id="checkbox-swish" />
	// <label htmlFor="checkbox-card">Card</label>
	// <input type="checkbox" id="checkbox-card" />
	//{' '}
</div>; */
}

{
	/* {cart.length > 0 ? (
					<Link to={'/confirmation'} className="cart-checkout__button-confirm">
						CONFIRM
					</Link> // Link to Confirmation page if cart is not empty CONFIRM
				) : (
					<div className="cart-checkout__button-confirm--disabled">CONFIRM</div> // "disabled" Link if cart is empty
				)} */
}
