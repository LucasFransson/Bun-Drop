import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import Main from '../components/Main';
import Aside from '../components/Aside';

function HomePage() {
	// useLocation hook for checking if the url is menu or not, if it is then use the content__menu with a different flex-direction
	const location = useLocation();
	const isMenuPage = location.pathname === '/menu';
	return (
		<div className={`content ${isMenuPage ? 'content__menu' : ''}`}>
			<Main />
			<Aside />
		</div>
	);
}
export default HomePage;
