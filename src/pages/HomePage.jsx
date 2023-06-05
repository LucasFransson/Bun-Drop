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

// import React from 'react';
// import { Link } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';

// function HomePage() {
// 	const items = useFetch('http://localhost:7000/burgers', []);
// 	return (
// 		<>
// 			<header className="header u-margin-bottom-medium flex-container-column">
// 				<h1 className="header__heading-primary">
// 					<span className="header__heading-primary--main">Bun Drop</span>
// 					<span className="header__heading-primary--sub">
// 						Drop it like it's hot
// 					</span>
// 				</h1>
// 				<div className="header__logo-container">
// 					<img
// 						src="./public/images/logo black.png"
// 						alt="Bun Drop Logo"
// 						className="header__logo"
// 					/>
// 				</div>
// 			</header>

// 			<div className="hero-section">
// 				<div className="hero-section__background">&nbsp;</div>
// 				<div className="hero-section__text">
// 					<h1 className="hero-section__text--main">Lorem ipsum dolor</h1>
// 					<p className="hero-section__text--sub">
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
// 						voluptatum soluta tenetur sed placeat nisi. Consectetur adipisicing
// 						elit.
// 					</p>
// 				</div>
// 				<img
// 					className="hero-section__image"
// 					src="./public/images/burger3.png"
// 					alt="Large Picture of a Burger"
// 				/>
// 				<button className="btn hero-section__btn btn__cta">Order Now</button>
// 			</div>
// 		</>
// 	);
// }
// export default HomePage;
