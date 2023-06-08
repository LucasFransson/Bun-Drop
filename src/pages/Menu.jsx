// import React from 'react';
// import Card from '../components/MenuItemCard';
// import CardGrid from '../components/CardGrid';
// import useFetch from '../hooks/useFetch';

// function Menu() {
// 	const burgers = useFetch('http://localhost:7000/burgers', []);
// 	return (
// 		<>
// 			<CardGrid items={burgers} Component={Card} linkPrefix="menu" />
// 		</>
// 	);
// }

// export default Menu;
// import React, { useState } from 'react';
// import Card from '../components/MenuItemCard';
// import CardGrid from '../components/CardGrid';
// import useFetch from '../hooks/useFetch';
// import { ReactComponent as SearchIcon } from '/public/svg/SVG/search.svg';

// function Menu() {
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const burgers = useFetch('http://localhost:7000/burgers', []);
// 	const filteredBurgers = burgers.filter((burger) =>
// 		burger.name.toLowerCase().includes(searchTerm.toLowerCase())
// 	);

// 	return (
// 		<>
// 			<form className="search">
// 				<input
// 					type="text"
// 					className="search__input"
// 					placeholder="Search"
// 					onChange={(e) => setSearchTerm(e.target.value)}
// 				/>
// 				<SearchIcon className="search__icon" />
// 				<button className="search__button"></button>
// 			</form>
// 			<CardGrid items={filteredBurgers} Component={Card} linkPrefix="menu" />
// 		</>
// 	);
// }

// export default Menu;

import React, { useState } from 'react';
import Card from '../components/MenuItemCard';
import CardGrid from '../components/CardGrid';
import useFetch from '../hooks/useFetch';
import SearchBar from '../components/Searchbar';

function Menu() {
	const [searchTerm, setSearchTerm] = useState('');
	const burgers = useFetch('http://localhost:7000/burgers', []);
	const filteredBurgers = burgers.filter((burger) =>
		burger.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<CardGrid items={filteredBurgers} Component={Card} linkPrefix="menu" />
		</>
	);
}

export default Menu;
