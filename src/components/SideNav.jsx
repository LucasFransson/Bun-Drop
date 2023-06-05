import React from 'react';
import { Link } from 'react-router-dom';

// See if I can get the SVGs Working, this is the way apparently
// import { ReactComponent as MenuIcon } from './icons/menu.svg';
// import { ReactComponent as CartIcon } from './icons/cart.svg';
// import { ReactComponent as InfoIcon } from './icons/info.svg';
// import { ReactComponent as HomeIcon } from './icons/home.svg';

function SideNav() {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item">
					<Link to={'/menu'} className="side-nav__link">
						{/* <MenuIcon className="side-nav__icon" /> */}
						<span>MENU</span>
					</Link>
				</li>
				<li className="side-nav__item">
					<Link to={'/cart'} className="side-nav__link">
						{/* <CartIcon className="side-nav__icon" /> */}
						<span>CART</span>
					</Link>
				</li>
				<li className="side-nav__item">
					<Link to={'/info'} className="side-nav__link">
						{/* <InfoIcon className="side-nav__icon" /> */}
						<span>INFO</span>
					</Link>
				</li>
				<li className="side-nav__item">
					<Link to={'/'} className="side-nav__link">
						{/* <HomeIcon className="side-nav__icon" /> */}
						<span>HOME</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default SideNav;
