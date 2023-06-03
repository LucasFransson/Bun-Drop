import React from 'react';

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<ul>
					<li>
						<Link to={'/menu'}>
							<button>Menu</button>
						</Link>
					</li>
					<li>Home</li>
					<li>Search</li>
					<li>Cart</li>
					<li>Settings</li>
					<li>User</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
