import React from 'react';
import Card from '../components/MenuItemCard';
import CardGrid from '../components/CardGrid';
import useFetch from '../hooks/useFetch';

function Menu() {
	const burgers = useFetch('http://localhost:7000/burgers', []);
	return (
		<>
			<CardGrid items={burgers} Component={Card} linkPrefix="menu" />
		</>
	);
}

export default Menu;
