import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Button from '../components/button';
import React, { useContext, useState } from 'react';
import { CartContext } from '../utils/CartContext';
import { addToCart } from '../utils/cartService';
import { addFavorite, getUserName, getUserId } from '../utils/userService';

function ProductPage() {
	const { burgerId } = useParams();
	const burger = useFetch(`http://localhost:7000/burgers/${burgerId}`, []);

	// Cart
	const { setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	// const handleAddToCart = () => {
	// 	const itemWithQuantity = { ...burger, quantity };

	// 	addToCart(itemWithQuantity);
	// 	setCart((prevCart) => [...prevCart, itemWithQuantity]);
	// };

	const handleAddToCart = () => {
		const itemWithQuantity = { ...burger, quantity: Number(quantity) }; // Convert quantity to a number
		const updatedCart = addToCart(itemWithQuantity);
		setCart(updatedCart);
	};

	return (
		<>
			<div className="product">
				<h2 className="product__title">{burger.name}</h2>
				<img src={burger.image} alt={burger.name} className="product__image" />
				<p className="product__category">Category: {burger.category}</p>
				<p className="product__price">Price: ${burger.price}</p>
				<p className="product__description">
					Description: {burger.description}
				</p>
				<div>
					<div className="ingredients">
						{burger.ingredients ? (
							<ul className="product__ingredients">
								<li>Ingredients:</li>
								{burger.ingredients.map((ingredient, index) => (
									<li key={index} className="product__ingredients__item">
										{ingredient}
									</li>
								))}
							</ul>
						) : (
							<p>Ingredients not found</p>
						)}

						{burger.nutrients ? (
							<>
								<h3>Nutrients:</h3>
								<p className="product__ingredients__item">
									Calories: {burger.nutrients.calories}
								</p>
								<p className="product__ingredients__item">
									Protein: {burger.nutrients.protein}g
								</p>
								<p className="product__ingredients__item">
									Carbs: {burger.nutrients.carbs}g
								</p>
								<p className="product__ingredients__item">
									Fat: {burger.nutrients.fat}g
								</p>
							</>
						) : (
							<p>Nutrients not found</p>
						)}
					</div>
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

				{/* <Button
					text="Go to Home Page"
					onClick={() => history.push('/')}
					styleClass="btn btn__nav "
				></Button> */}

				<Button
					text="Add Favorite"
					onClick={async () => {
						const userId = await getUserId(getUserName());
						addFavorite(userId, burgerId);
					}}
					styleClass="btn btn--favorite"
				></Button>
			</div>
		</>
	);
}

export default ProductPage;
