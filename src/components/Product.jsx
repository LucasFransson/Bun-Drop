import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { addToCart } from './cartUtils';

function Product({ item }) {
	const { setCart } = useContext(CartContext);

	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = () => {
		const itemWithQuantity = { ...item, quantity };

		addToCart(itemWithQuantity);

		setCart((prevCart) => [...prevCart, itemWithQuantity]);
	};

	return (
		<div>
			<h2>{item.name}</h2>
			<p>{item.description}</p>
			<p>${item.price}</p>
			<label>
				Quantity:
				<input
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					min={1}
				/>
			</label>
			<button onClick={handleAddToCart}>Add to Cart</button>
		</div>
	);
}

export default Product;
