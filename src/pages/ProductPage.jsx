import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Button from '../components/button';
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../utils/CartContext';
import { addToCart } from '../utils/cartService';
import {
	addFavorite,
	removeFavorite,
	isItemFavorite,
	getUserName,
	getUserId,
} from '../utils/userService';
import { ReactComponent as HeartIcon } from '/public/svg/SVG/heart.svg';
import { ReactComponent as HeartIconOutlined } from '/public/svg/SVG/heart-outlined.svg';

function ProductPage() {
	const { burgerId } = useParams();
	const burger = useFetch(`http://localhost:7000/burgers/${burgerId}`, []);

	// Cart
	const { setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);
	const [isFavorite, setIsFavorite] = useState(false);

	const checkFavoriteStatus = async () => {
		const favoriteStatus = await isItemFavorite(burger);
		setIsFavorite(favoriteStatus);
	};

	useEffect(() => {
		checkFavoriteStatus();
	}, [burger]);

	const handleAddToCart = () => {
		const itemWithQuantity = { ...burger, quantity: Number(quantity) }; // Convert quantity to a number
		const updatedCart = addToCart(itemWithQuantity);
		setCart(updatedCart);
	};

	return (
		<>
			<div className="product">
				<div className="product__main">
					{isFavorite ? (
						<HeartIconOutlined
							onClick={async () => {
								await removeFavorite(burger, checkFavoriteStatus);
							}}
							className="product__button--favorite"
						></HeartIconOutlined>
					) : (
						<HeartIcon
							onClick={async () => {
								await addFavorite(burger, checkFavoriteStatus);
							}}
							className="product__button--favorite"
						></HeartIcon>
					)}
					<h2 className="product__title">{burger.name}</h2>
					<img
						src={burger.image}
						alt={burger.name}
						className="product__image"
					/>{' '}
					<p className="product__category">Category: {burger.category}</p>
					<p className="product__description">
						Description: {burger.description}
					</p>
					<p className="product__price">Price: ${burger.price}</p>
				</div>

				<div className="product__details">
					<div className="product__ingredients">
						<h3>Ingredients:</h3>
						{burger.ingredients ? (
							<ul>
								{burger.ingredients.map((ingredient, index) => (
									<li key={index} className="product__ingredients__item">
										{ingredient}
									</li>
								))}
							</ul>
						) : (
							<p>Ingredients not found</p>
						)}
					</div>

					<div className="product__nutrients">
						<h3>Nutrients:</h3>
						{burger.nutrients ? (
							<>
								<p className="product__nutrients__item">
									Calories: {burger.nutrients.calories}
								</p>
								<p className="product__nutrients__item">
									Protein: {burger.nutrients.protein}g
								</p>
								<p className="product__nutrients__item">
									Carbs: {burger.nutrients.carbs}g
								</p>
								<p className="product__nutrients__item">
									Fat: {burger.nutrients.fat}g
								</p>
							</>
						) : (
							<p>Nutrients not found</p>
						)}
					</div>
				</div>
				<div className="product__quantity">
					<label className="product__quantity--label">
						Quantity:
						<input
							type="number"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							min={1}
							className="product__quantity--input"
						/>
					</label>

					<Button
						text="Add to Cart"
						onClick={handleAddToCart}
						styleClass="product__button--add-cart"
					></Button>
				</div>
			</div>
			{/* <div className="product">
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

				{isFavorite ? (
					<BrokenHeartIcon
						onClick={async () => {
							await removeFavorite(burger, checkFavoriteStatus);
						}}
						className="product__button--favorite"
					></BrokenHeartIcon>
				) : (
					<HeartIcon
						onClick={async () => {
							await addFavorite(burger, checkFavoriteStatus);
						}}
						className="product__button--favorite"
					></HeartIcon>
				)}
			</div> */}
		</>
	);
}

export default ProductPage;

{
	/* <Button
					text="Go to Home Page"
					onClick={() => history.push('/')}
					styleClass="btn btn__nav "
				></Button> */
}

// 	<Button
// 	text="Add Favorite"
// 	onClick={async () => {
// 		const userId = await getUserId(getUserName());
// 		addFavorite(userId, burger);
// 	}}
// 	styleClass="btn btn--favorite"
// ></Button>

// const handleAddToCart = () => {
// 	const itemWithQuantity = { ...burger, quantity };

// 	addToCart(itemWithQuantity);
// 	setCart((prevCart) => [...prevCart, itemWithQuantity]);
// };

// 	<HeartIcon
// 	text="Add Favorite"
// 	onClick={async () => {
// 		const userId = await getUserId(getUserName());
// 		addFavorite(userId, burger);
// 	}}
// 	className="product__button--favorite"
// ></HeartIcon>

{
	/* {isFavorite ? (
					<HeartIcon
						onClick={async () => {
							const userId = await getUserId(getUserName());
							addFavorite(burger);
						}}
						className="product__button--favorite"
					></HeartIcon>
				) : (
					<BrokenHeartIcon
						onClick={async () => {
							//const userId = await getUserId(getUserName());
							// removeFavorite(userId, burger);
							removeFavorite(burger);
						}}
						className="product__button--favorite"
					></BrokenHeartIcon>
				)} */
}
// useEffect(() => {
// 	const checkFavoriteStatus = async () => {
// 		const favoriteStatus = await isItemFavorite(burger);
// 		console.log('favoriteStatus:', favoriteStatus);
// 		setIsFavorite(favoriteStatus);
// 	};

// 	checkFavoriteStatus();
// }, [burger]);
