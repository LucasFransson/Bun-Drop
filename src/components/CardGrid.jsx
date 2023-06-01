import React from 'react';
import { Link } from 'react-router-dom';

function CardGrid({ items, Component, linkPrefix }) {
	return (
		<>
			<div className="grid-container">
				{items.map((item) => (
					<div key={item.id}>
						<Link to={`/${linkPrefix}/${item.id}`}>
							<Component {...item} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default CardGrid;
