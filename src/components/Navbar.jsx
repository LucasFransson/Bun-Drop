import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<ul className="navbar-list">
					<li className="navbar-list__item">
						<Link to={'/menu'}>Menu</Link>
					</li>
					<li className="navbar-list__item">
						<Link to={'/'}>Home</Link>
					</li>
					<li className="navbar-list__item">Search</li>
					<li className="navbar-list__item">
						<Link to={'/cart'}>Cart</Link>
					</li>
					<li className="navbar-list__item">Settings</li>
					<li className="navbar-list__item">
						<Link to={'/login'}>User</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
