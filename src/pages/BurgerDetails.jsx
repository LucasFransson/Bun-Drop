import React from 'react';

function BurgerDetails({ burger }) {
	return (
		<>
			<div>
				<h2>{burger.name}</h2>
				<img src={burger.image} alt={burger.name} />
				<p>Category: {burger.category}</p>
				<p>Price: ${burger.price}</p>
				<p>Description: {burger.description}</p>
				<ul>
					<li>Ingredients:</li>
					{burger.ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
				<div>
					<h3>Nutrients:</h3>
					<p>Calories: {burger.nutrients.calories}</p>
					<p>Protein: {burger.nutrients.protein}g</p>
					<p>Carbs: {burger.nutrients.carbs}g</p>
					<p>Fat: {burger.nutrients.fat}g</p>
				</div>

				<Button
					text="Add to Cart"
					onClick={() => addToCart(burger)}
					styleClass="btn btn__add-cart"
				></Button>

				<Button
					text="Go to Home Page"
					onClick={() => history.push('/')}
					styleClass="btn btn__nav "
				></Button>
			</div>
		</>
	);
}

export default BurgerDetails;
