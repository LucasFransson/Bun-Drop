import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<ul className="navbar__list">
					<li className="navbar__list--item">
						<Link to={'/menu'}>
							<button>Menu</button>
						</Link>
					</li>
					<li className="navbar__list--item">Home</li>
					<li className="navbar__list--item">Search</li>
					<li className="navbar__list--item">Cart</li>
					<li className="navbar__list--item">Settings</li>
					<li className="navbar__list--item">User</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
