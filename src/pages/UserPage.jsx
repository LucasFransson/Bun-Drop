import React, { useEffect, useState } from 'react';
import { getFavorites } from '../utils/userService';
import CardGrid from '../components/CardGrid';
import Card from '../components/MenuItemCard';

function UserPage() {
	const [favorites, setFavorites] = useState([]);
	useEffect(() => {
		const fetchFavorites = async () => {
			const favs = await getFavorites();
			setFavorites(favs);
		};

		fetchFavorites();
	}, []);

	return (
		<div>
			<h2>Your Favorites</h2>
			<CardGrid items={favorites} Component={Card} linkPrefix="burgers" />
		</div>
	);
}

export default UserPage;
