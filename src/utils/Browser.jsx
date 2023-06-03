import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Menu from '../pages/Menu';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

function Browser() {
	return (
		<Router>
			<Navbar />
			<Cart />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/menu/:burgerId" element={<ProductPage />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</Router>
	);
}

export default Browser;
