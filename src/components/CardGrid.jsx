// Not sure if this component makes that much sence, it is very small and I think that it might be better to just ditch it and iterate over
// the items/array in the parent components instead to increase readability.
// If I have lots of time left: Evaluate/Consider going through the project and replace all the instances of this component with a map function in the parent component.
// Keeping this component for now since it is used in the project and it is not that big of a deal, + I liked the idea of having a component that accepted other generic components as props.

import React from 'react';
import { Link } from 'react-router-dom';

function CardGrid({ items, Component, linkPrefix }) {
	return (
		<>
			<div className="grid-container">
				{items.map((item) => (
					<div className="grid-container__item" key={item.id}>
						{/* <Link to={`/${linkPrefix}/${item.id}`}> */}
						<Component {...item} />
						{/* </Link> */}
					</div>
				))}
			</div>
		</>
	);
}

export default CardGrid;
