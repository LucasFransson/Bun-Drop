import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '/public/svg/SVG/spoon-knife.svg';
import { ReactComponent as CartIcon } from '/public/svg/SVG/cart.svg';
import { ReactComponent as InfoIcon } from '/public/svg/SVG/info.svg';
import { ReactComponent as HomeIcon } from '/public/svg/SVG/home3.svg';

function SideNav() {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item">
					<Link to={'/menu'} className="side-nav__link">
						{<MenuIcon className="side-nav__icon" />}
						<span>MENU</span>
					</Link>
				</li>
				<li className="side-nav__item">
					<Link to={'/cart'} className="side-nav__link">
						{<CartIcon className="side-nav__icon" />}
						<span>CART</span>
					</Link>
				</li>

				<li className="side-nav__item">
					<Link to={'/'} className="side-nav__link">
						{<HomeIcon className="side-nav__icon" />}
						<span>HOME</span>
					</Link>
				</li>
				<li className="side-nav__item">
					<Link to={'/info'} className="side-nav__link">
						{<InfoIcon className="side-nav__icon" />}
						<span>INFO</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default SideNav;
