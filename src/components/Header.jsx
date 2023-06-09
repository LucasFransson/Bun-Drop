import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as UserIcon } from '/public/svg/SVG/user.svg';
import { ReactComponent as SearchIcon } from '/public/svg/SVG/search.svg';
import { logOutUser } from '../utils/userService';
import { Link } from 'react-router-dom';

function Header() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state var for dropdown menu, set to FALSE by default (not opened)
	const dropdownRef = useRef(null); // reference to the user div. Note to self, not 100 % sure of how useRef works exactly, check documentation

	const handleLogOut = () => {
		logOutUser();
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen); // toggle the dropdown state var to be the opposite of its current value
	};

	// useEffect for closing the dropdown menu when clicking outside of it
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				// if the dropdownRef.current is NOT null AND the clicked element is NOT inside the dropdownRef.current, aka if the click is outside of the dropdown
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside); // event listener for all clicks
		return () => {
			document.removeEventListener('mousedown', handleClickOutside); // apparently this is important af when using EventListeners in React. This "cleans up"/removes the event listener when the component unmounts, if missing it will cause memory leaks.
		};
	}, []);

	const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // BEWARE, this checks for STRING 'true' not boolean true right now. Consider changing localstorage to use boolean instead

	return (
		<header className="header">
			<img
				src="/public/images/logo black.png"
				alt=""
				className="header__logo"
			/>
			<h1 className="header__title">Bun Drop</h1>
			<nav className="user-nav">
				{isLoggedIn ? ( // check if user is logged in, render user-nav if "true"
					<div
						className="user-nav__user"
						onClick={toggleDropdown}
						ref={dropdownRef}
					>
						<UserIcon className="user-nav__icon" />
						{isDropdownOpen && ( // if dropdown is open, render dropdown menu
							<div className="user-nav__dropdown">
								<Link to="/user" className="user-nav__dropdown-item">
									User Page
								</Link>
								<button
									className="user-nav__dropdown-item"
									onClick={handleLogOut}
								>
									Logout
								</button>
							</div>
						)}
					</div>
				) : (
					// if user is not logged in, render login Link
					<Link to="/login" className="user-nav__login-link">
						Login
					</Link>
				)}
			</nav>
		</header>
	);
}

export default Header;

// import React, { useState, useEffect, useRef } from 'react';
// import { ReactComponent as UserIcon } from '/public/svg/SVG/user.svg';
// import { ReactComponent as SearchIcon } from '/public/svg/SVG/search.svg';
// import { logOutUser } from '../utils/userService';
// import { Link } from 'react-router-dom';

// function Header() {
// 	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// 	const dropdownRef = useRef(null);

// 	const handleLogOut = () => {
// 		logOutUser();
// 	};

// 	const toggleDropdown = () => {
// 		setIsDropdownOpen(!isDropdownOpen);
// 	};

// 	useEffect(() => {
// 		const handleClickOutside = (event) => {
// 			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// 				setIsDropdownOpen(false);
// 			}
// 		};

// 		document.addEventListener('mousedown', handleClickOutside);
// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);

// 	return (
// 		<header className="header">
// 			<img
// 				src="/public/images/logo black.png"
// 				alt=""
// 				className="header__logo"
// 			/>
// 			<h1 className="header__title">Bun Drop</h1>
// 			<nav className="user-nav">
// 				<div
// 					className="user-nav__user"
// 					onClick={toggleDropdown}
// 					ref={dropdownRef}
// 				>
// 					<UserIcon className="user-nav__icon" />
// 					{isDropdownOpen && (
// 						<div className="user-nav__dropdown">
// 							<Link to="/user-page" className="user-nav__dropdown-item">
// 								User Page
// 							</Link>
// 							<button
// 								className="user-nav__dropdown-item"
// 								onClick={handleLogOut}
// 							>
// 								Logout
// 							</button>
// 						</div>
// 					)}
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }

// export default Header;

//

// import React, { useState } from 'react';
// import { ReactComponent as UserIcon } from '/public/svg/SVG/user.svg';
// import { ReactComponent as SearchIcon } from '/public/svg/SVG/search.svg';
// import { logOutUser } from '../utils/userService';
// import { Link } from 'react-router-dom';

// function Header() {
// 	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// 	const handleLogOut = () => {
// 		logOutUser();
// 	};

// 	const toggleDropdown = () => {
// 		setIsDropdownOpen(!isDropdownOpen);
// 	};

// 	return (
// 		<header className="header">
// 			<img
// 				src="/public/images/logo black.png"
// 				alt=""
// 				className="header__logo"
// 			/>
// 			<h1 className="header__title">Bun Drop</h1>
// 			<nav className="user-nav">
// 				<div className="user-nav__user" onClick={toggleDropdown}>
// 					<UserIcon className="user-nav__icon" />
// 					{isDropdownOpen && (
// 						<div className="user-nav__dropdown">
// 							<Link to="/user-page" className="user-nav__dropdown-item">
// 								User Page
// 							</Link>
// 							<button
// 								className="user-nav__dropdown-item"
// 								onClick={handleLogOut}
// 							>
// 								Logout
// 							</button>
// 						</div>
// 					)}
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }

// export default Header;

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import React from 'react';
// import { ReactComponent as UserIcon } from '/public/svg/SVG/user.svg';
// import { ReactComponent as SearchIcon } from '/public/svg/SVG/search.svg';
// import { logOutUser } from '../utils/userService';

// function Header() {
// 	const handleLogOut = () => {
// 		logOutUser();
// 	};
// 	return (
// 		<header className="header">
// 			<img
// 				src="/public/images/logo black.png"
// 				alt=""
// 				className="header__logo"
// 			/>
// 			<h1 className="header__title">Bun Drop</h1>
// 			{/* // THIS IS MEANT FOR A SEARCHBAR IN THE HEADER USING CONTEXT TO AUTOMATICALLY REDIRECT THE USER TO THE MENU */}
// 			{/* <form className="header-search">
// 				<input
// 					type="text"
// 					className="header-search__input"
// 					placeholder="Search"
// 				/>
// 				<SearchIcon className="header-search__icon" />
// 				<button className="header-search__button"></button>
// 			</form> */}
// 			<nav className="user-nav">
// 				<div className="user-nav__user">
// 					<UserIcon className="user-nav__icon" />
// 				</div>
// 				{/* <button className="user-nav__logout" onClick={handleLogOut}>
// 					Logout
// 				</button> */}
// 			</nav>
// 		</header>
// 	);
// }

// export default Header;
