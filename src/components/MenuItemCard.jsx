import React, { useContext, useState } from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

import { CartContext } from '../utils/CartContext';
import { addToCart } from '../utils/cartService';

function Card(props) {
	// const handleAddToCart = () => {
	// 	console.log('Add to cart clicked!');
	// };

	const handleAddToCart = () => {
		const itemWithQuantity = { ...props, quantity: 1 };
		const updatedCart = addToCart(itemWithQuantity);
		setCart(updatedCart);
	};

	const handleViewInfo = () => {
		console.log('View info clicked!');
	};

	// Cart
	const { setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	// conditionally set the image source, if props.image is not provided  use a default image URL
	const imageSrc = props.image || './images/logo black.png';

	return (
		<>
			<div className="card">
				<h1 className="card__title">{props.name}</h1>
				<img src={imageSrc} alt={props.name} className="card__image" />
				{/* <div className="card__text"> */}
				<p className="card__category">{props.category}</p>
				<p className="card__price">{props.price} $</p>
				{/* </div> */}

				<div className="card__buttons">
					<Link to={`/menu/${props.id}`}>
						<Button
							text="More Info"
							styleClass="card__buttons--info"
							onClick={handleViewInfo}
						/>
					</Link>
					<Button
						text="Add To Cart"
						styleClass="card__buttons--addCart"
						onClick={handleAddToCart}
					/>
				</div>
			</div>
		</>
	);
}

export default Card;
