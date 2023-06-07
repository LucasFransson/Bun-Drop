import React from 'react';
import { ReactComponent as UserIcon } from '/public/svg/SVG/user.svg';
import { ReactComponent as SearchIcon } from '/public/svg/SVG/search.svg';
import { logOutUser } from '../utils/userService';

function Header() {
	const handleLogOut = () => {
		logOutUser();
	};
	return (
		<header className="header">
			<img
				src="/public/images/logo black.png"
				alt=""
				className="header__logo"
			/>
			<h1 className="header__title">Bun Drop</h1>
			<form className="search">
				<input type="text" className="search__input" placeholder="Search" />
				<SearchIcon className="search__icon" />
				<button className="search__button"></button>
			</form>
			<nav className="user-nav">
				<div className="user-nav__user">
					<UserIcon className="user-nav__icon" />
				</div>
				{/* <button className="user-nav__logout" onClick={handleLogOut}>
					Logout
				</button> */}
			</nav>
		</header>
	);
}

export default Header;
