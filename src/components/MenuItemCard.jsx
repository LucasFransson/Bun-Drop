// RENAME THIS TO MENUITEMCARD AND CHECK FOR NAME ERRORS IN THE CODE

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

		setLastAddedItem(props.name); // set lastAddedItem to the name of the added item
		setShowPopup(true); // show popup
		setTimeout(() => {
			// for 2sec (2000ms)
			setShowPopup(false);
		}, 2000);
	};

	const handleViewInfo = () => {
		// TESTING/DEBUGGING PURPOSES REMOVE THIS
		console.log('View info clicked!');
	};

	// Cart
	const { setCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	// conditionally set the image source, if props.image is not provided  use a default image URL
	const imageSrc = props.image || './images/logo black.png';

	const [showPopup, setShowPopup] = useState(false); // state var for showing popup
	const [lastAddedItem, setLastAddedItem] = useState(''); // state var for last added item (for display purposes in the popup)

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
			{showPopup && <div className="popup">{lastAddedItem} added to cart!</div>}
			{/*shows a popup displaying i.name added to cart. Note, this doesnt work on spam clicks */}
			{/* Tried implementing an array of divs/popups to solve this, but it was buggy af */}
		</>
	);
}

export default Card;

// MULTIPLE POPUPS
// import React, { useContext, useState, useEffect } from 'react';
// import Button from './button';
// import { Link } from 'react-router-dom';

// import { CartContext } from '../utils/CartContext';
// import { addToCart } from '../utils/cartService';

// function Card(props) {
// 	const { setCart } = useContext(CartContext);
// 	const [quantity, setQuantity] = useState(1);
// 	const [popups, setPopups] = useState([]);

// 	const handleViewInfo = () => {
// 		// TESTING/DEBUGGING PURPOSES REMOVE THIS
// 		console.log('View info clicked!');
// 	};

// 	const handleAddToCart = () => {
// 		const itemWithQuantity = { ...props, quantity: 1 };
// 		const updatedCart = addToCart(itemWithQuantity);
// 		setCart(updatedCart);

// 		setPopups((prevPopups) => [
// 			...prevPopups,
// 			{ id: Date.now(), message: `${props.name} added to cart!` },
// 		]);
// 	};
// 	useEffect(() => {
// 		const timer = setInterval(() => {
// 			setPopups((prevPopups) => prevPopups.slice(1));
// 		}, 2000);

// 		return () => {
// 			clearInterval(timer);
// 		};
// 	}, []);

// 	const imageSrc = props.image || './images/logo black.png';

// 	return (
// 		<>
// 			<div className="card">
// 				<h1 className="card__title">{props.name}</h1>
// 				<img src={imageSrc} alt={props.name} className="card__image" />
// 				<div className="card__text">
// 					<p className="card__category">{props.category}</p>
// 					<p className="card__price">{props.price} $</p>
// 				</div>

// 				<div className="card__buttons">
// 					<Link to={`/menu/${props.id}`}>
// 						<Button
// 							text="More Info"
// 							styleClass="card__buttons--info"
// 							onClick={handleViewInfo}
// 						/>
// 					</Link>
// 					<Button
// 						text="Add To Cart"
// 						styleClass="card__buttons--addCart"
// 						onClick={handleAddToCart}
// 					/>
// 				</div>
// 			</div>

// 			{/* <div className="popup-container">
// 				{popups.map((popup, index) => (
// 					<div key={index} className="popup">
// 						{popup}
// 					</div>
// 				))}
// 			</div> */}
// 			{/* <div className="popup-container">
// 				{popups.map((popup) => (
// 					<div key={popup.id} className="popup">
// 						{popup.text}
// 					</div>
// 				))}
// 			</div> */}
// 			<div className="popup-container">
// 				{popups.map((popup) => (
// 					<div key={popup.id} className="popup">
// 						{popup.message}
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// }

// export default Card;
