import React, { useEffect, useState } from 'react';
import { getFavorites } from '../utils/userService';
import CardGrid from '../components/CardGrid';
import Card from '../components/MenuItemCard';
import { getOrders } from '../utils/userService';

function UserPage() {
	const [favorites, setFavorites] = useState([]);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			const favs = await getFavorites();
			setFavorites(favs);
		};

		const fetchOrders = async () => {
			const ord = await getOrders();
			setOrders(ord);
		};

		fetchFavorites();
		fetchOrders();
	}, []);

	return (
		<div className="user-page">
			<div className="user-page__favorites">
				<h2>Your Favorites</h2>
				<CardGrid items={favorites} Component={Card} linkPrefix="burgers" />
			</div>
			<div className="user-page__orders">
				<h2>Your Orders</h2>
				{orders.map((order, index) => (
					<div key={index}>
						<h3>Order ID: {order.orderId}</h3>
						<p>Total Price: {order.totalPrice}</p>
						<p>Order Time: {order.time}</p>
						<h4>Items:</h4>
						{order.items.map((item, index) => (
							<div key={index}>
								<p>Name: {item.name}</p>
								<p>Quantity: {item.quantity}</p>
								<p>Price: {item.price}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default UserPage;

// function UserPage() {
// 	const [favorites, setFavorites] = useState([]);
// 	useEffect(() => {
// 		const fetchFavorites = async () => {
// 			const favs = await getFavorites();
// 			setFavorites(favs);
// 		};

// 		fetchFavorites();
// 	}, []);

// 	return (
// 		<>
// 			<div className="user-page__favorites">
// 				<h2>Your Favorites</h2>
// 				<CardGrid items={favorites} Component={Card} linkPrefix="burgers" />
// 			</div>
// 		</>
// 	);
// }

// export default UserPage;
