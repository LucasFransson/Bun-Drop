import React from 'react';
import Button from './button';

function Card(props) {
	const handleAddToCart = () => {
		console.log('Add to cart clicked!');
	};

	const handleViewInfo = () => {
		console.log('View info clicked!');
	};

	// Conditionally set the image source: if props.image is not provided, use a default image URL.
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
					<Button
						text="More Info"
						styleClass="card__buttons--info"
						onClick={handleViewInfo}
					/>
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
