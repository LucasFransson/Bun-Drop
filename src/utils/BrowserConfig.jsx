import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Menu from '../pages/Menu';

const BrowserConfig = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/menu/:burgerId" element={<ProductPage />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</>
	);
};

export default BrowserConfig;
