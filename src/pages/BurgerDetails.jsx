import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Button from '../components/button';

function BurgerDetails() {
	const { burgerId } = useParams();
	const burger = useFetch(`http://localhost:7000/burgers/${burgerId}`, []);

	return (
		<>
			<div>
				<h2>{burger.name}</h2>
				<img src={burger.image} alt={burger.name} />
				<p>Category: {burger.category}</p>
				<p>Price: ${burger.price}</p>
				<p>Description: {burger.description}</p>
				{burger.ingredients ? (
					<ul>
						<li>Ingredients:</li>
						{burger.ingredients.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
					</ul>
				) : (
					<p>Ingredients not found</p>
				)}
				<div>
					{burger.nutrients ? (
						<>
							<h3>Nutrients:</h3>
							<p>Calories: {burger.nutrients.calories}</p>
							<p>Protein: {burger.nutrients.protein}g</p>
							<p>Carbs: {burger.nutrients.carbs}g</p>
							<p>Fat: {burger.nutrients.fat}g</p>
						</>
					) : (
						<p>Nutrients not found</p>
					)}
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
