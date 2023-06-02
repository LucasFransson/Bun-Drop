import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Button from '../components/button';
import React, { useContext, useState } from 'react';
import { CartContext } from '../utils/CartContext';
import { addToCart } from '../utils/cartService';

function ProductPage() {
	const { burgerId } = useParams();
	const burger = useFetch(`http://localhost:7000/burgers/${burgerId}`, []);

	// Cart
	const { setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = () => {
		const itemWithQuantity = { ...burger, quantity };

		addToCart(itemWithQuantity);

		setCart((prevCart) => [...prevCart, itemWithQuantity]);
	};

	return (
		<>
			<div className="product">
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

				<label>
					Quantity:
					<input
						type="number"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						min={1}
					/>
				</label>
				<Button
					text="Add to Cart"
					onClick={handleAddToCart}
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

export default ProductPage;

// import React, { useContext, useState } from 'react';
// import { CartContext } from './CartContext';
// import { addToCart } from './cartUtils';

// function FoodItem({ item }) {
// 	const { setCart } = useContext(CartContext);

// 	const [quantity, setQuantity] = useState(1);

// 	const handleAddToCart = () => {
// 		const itemWithQuantity = { ...item, quantity };

// 		addToCart(itemWithQuantity);

// 		setCart((prevCart) => [...prevCart, itemWithQuantity]);
// 	};

// 	return (
// 		<div>
// 			<h2>{item.name}</h2>
// 			<p>{item.description}</p>
// 			<p>${item.price}</p>
// 			<label>
// 				Quantity:
// 				<input
// 					type="number"
// 					value={quantity}
// 					onChange={(e) => setQuantity(e.target.value)}
// 					min={1}
// 				/>
// 			</label>
// 			<button onClick={handleAddToCart}>Add to Cart</button>
// 		</div>
// 	);
// }

// export default FoodItem;
