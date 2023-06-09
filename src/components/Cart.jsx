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
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();

	const [paymentMethod, setPaymentMethod] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [cvc, setCvc] = useState('');
	const [errors, setErrors] = useState({});

	const [city, setCity] = useState('');
	const [street, setStreet] = useState('');
	const [houseNumber, setHouseNumber] = useState('');

	const validateInputs = () => {
		let errors = {};

		// Paytment information
		if (paymentMethod === 'card') {
			if (cardNumber.length !== 16) {
				errors.cardNumber = 'Card number must be 16 digits';
			}

			if (expirationDate.length !== 4) {
				errors.expiryDate = 'Expiry date must be 4 digits';
			}

			if (cvc.length !== 3) {
				errors.cvc = 'CVC must be 3 digits';
			}
		} else if (paymentMethod === 'swish') {
			if (phoneNumber.length !== 10) {
				errors.phoneNumber = 'Phone number must be 10 digits';
			}
		}
		// Adress/Delievery Information
		if (!city.trim()) {
			errors.city = 'City is required';
		}

		if (!street.trim()) {
			errors.street = 'Street is required';
		}

		if (!houseNumber.trim()) {
			errors.houseNumber = 'House number is required';
		}

		setErrors(errors);

		// return true if there is no errors
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateInputs()) {
			// setCart([]);
			//alert('Your order has been confirmed'); // TESTING PURPOSES ONLY
			navigate('/confirmation');
		}
	};

	return (
		<div className="cart">
			<div className="cart__left-container">
				<h2 className="cart__heading">
					<span className="cart__heading--text">CART</span>
				</h2>
				<ul className="cart-list">
					{cart.map((item) => (
						<li key={item.id} className="cart-list__item">
							<p className="cart-list__item--name">{item.name}</p>{' '}
							<p className="cart-list__item--price">
								{' '}
								Price per Item: {item.price}
							</p>
							<p className="cart-list__item--quantity">
								Quantity: {item.quantity}
							</p>
							<p className="cart-list__item--total-cost">
								Cost: $ {item.price * item.quantity}
							</p>{' '}
							<BinIcon
								onClick={() => handleRemoveFromCart(item.id)}
								className="cart-list__button--remove"
							>
								Remove from cart
							</BinIcon>
							<div>
								<PlusIcon
									text="+"
									onClick={() => handleIncreaseQuantity(item)}
									className="cart-list__button--increase"
								></PlusIcon>
								<MinusIcon
									text="-"
									onClick={() => handleDecreaseQuantity(item)}
									className="cart-list__button--decrease"
									disabled={item.quantity <= 0}
								></MinusIcon>{' '}
							</div>
						</li>
					))}
				</ul>
			</div>
			{/* RIGHT SIDE CONTAINER / TOTAL CHECKOUT */}
			<div className="cart__right-container">
				<form
					onSubmit={(event) => handleSubmit(event)}
					className="cart-checkout"
				>
					<h2 className="cart-total__heading">
						Total: {cart.length > 0 ? `$${totalPrice}` : 'Cart is empty'}
					</h2>
					{/* ADRESS/ DELIEVERY  */}
					<div className="cart-checkout__adress">
						<label htmlFor="city">City:</label>
						<input
							type="text"
							id="city"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						{errors.city && (
							<p className="cart-checkout__error">{errors.city}</p>
						)}

						<label htmlFor="street">Street:</label>
						<input
							type="text"
							id="street"
							value={street}
							onChange={(e) => setStreet(e.target.value)}
						/>
						{errors.street && (
							<p className="cart-checkout__error">{errors.street}</p>
						)}

						<label htmlFor="house-number">House Number:</label>
						<input
							type="text"
							id="house-number"
							value={houseNumber}
							onChange={(e) => setHouseNumber(e.target.value)}
						/>
						{errors.houseNumber && (
							<p className="cart-checkout__error">{errors.houseNumber}</p>
						)}
					</div>
					{/* PAYMENT INFORMATION */}
					<div className="cart-checkout__checkbox-container">
						<div>
							<label htmlFor="checkbox-swish">Swish</label>
							<input
								type="checkbox"
								id="checkbox-swish"
								checked={paymentMethod === 'swish'}
								onChange={() => setPaymentMethod('swish')}
							/>
						</div>
						<div>
							<label htmlFor="checkbox-card">Card</label>
							<input
								type="checkbox"
								id="checkbox-card"
								checked={paymentMethod === 'card'}
								onChange={() => setPaymentMethod('card')}
							/>
						</div>
					</div>
					{/* SWISH PAYMENT METHOD */}
					{/* <div className="cart-checkout__payment"> */}
					{paymentMethod === 'swish' && (
						<div className="cart-checkout__swish-container">
							<label htmlFor="phone-number">Phone Number:</label>
							<input
								type="number"
								id="phone-number"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
							{errors.phoneNumber && (
								<p className="cart-checkout__error">{errors.phoneNumber}</p>
							)}
						</div>
					)}
					{/* CARD PAYMENT METHOD */}
					{paymentMethod === 'card' && (
						<div className="cart-checkout__card-container">
							<label htmlFor="card-number">Card Number:</label>
							<input
								type="number"
								id="card-number"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
							/>
							{errors.cardNumber && (
								<p className="cart-checkout__error">{errors.cardNumber}</p>
							)}

							<label htmlFor="expiration-date">Expiry Date:</label>
							<input
								type="number"
								id="expiration-date"
								value={expirationDate}
								onChange={(e) => setExpirationDate(e.target.value)}
							/>
							{errors.expiryDate && (
								<p className="cart-checkout__error">{errors.expiryDate}</p>
							)}

							<label htmlFor="cvc">CVC:</label>
							<input
								type="number"
								id="cvc"
								value={cvc}
								onChange={(e) => setCvc(e.target.value)}
							/>
							{errors.cvc && (
								<p className="cart-checkout__error">{errors.cvc}</p>
							)}
						</div>
					)}
					{/* </div> */}
					<button
						type="submit"
						className={`cart-checkout__button-confirm ${
							cart.length === 0 ? 'cart-checkout__button-confirm--disabled' : ''
						}`}
						disabled={cart.length === 0}
					>
						CONFIRM
					</button>
				</form>
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
