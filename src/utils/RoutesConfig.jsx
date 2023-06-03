import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Menu from '../pages/Menu';
import Cart from '../components/Cart';

// Component for handling all the Routing & Paths for the Application
const RoutesConfig = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/menu/:burgerId" element={<ProductPage />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</>
	);
};

export default RoutesConfig;
