// create a homepage component

import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function HomePage() {
	const items = useFetch('http://localhost:7000/burgers', []);
	return (
		<>
			<h1>Home Page</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<Link to={`/burgers/${item.id}`}>{item.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
