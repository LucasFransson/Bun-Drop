import React from 'react';

function Header() {
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
				<button className="search__button"></button>
			</form>
			<nav className="user-nav">
				<div className="user-nav__user">
					<svg className="user-nav__icon">
						<use xlink:href="/public/svg/sprite.svg#icon-user"></use>
					</svg>
				</div>
			</nav>
		</header>
	);
}

export default Header;
