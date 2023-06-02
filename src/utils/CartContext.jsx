import React, { createContext, useState, useEffect } from 'react';
import { getCart, saveCart } from './cartService';

export const CartContext = createContext(); // empty Context obj, "consumes" cartState and setCart

// Provider Component, uses the Context obj to provide the cartState and setCart function to ALL child components
export function CartProvider({ children }) {
	const [cart, setCart] = useState([]); // state variable for all cart items

	// useEffect "mount" hook, gets initial cart & sets it as the cartState
	useEffect(() => {
		const initCart = getCart();
		setCart(initCart);
	}, []);

	// useEffect hook for changes in the cartState, saves the CURRENT cart to local storage
	useEffect(() => {
		saveCart(cart);
	}, [cart]);

	// return the Provider component which provides the cartState and setCart function to ALL child components
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
}
