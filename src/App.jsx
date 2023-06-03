import '../css/style.css';

import useFetch from './hooks/useFetch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Browser from './utils/Browser';
import { CartProvider } from './utils/CartContext';

function App() {
	const items = useFetch('http://localhost:7000/burgers', []);

	return (
		<>
			<CartProvider>
				<Browser />
				<Footer />
			</CartProvider>
		</>
	);
}

export default App;

{
	/* <div className="cards">
				{items.map((item) => (
					<Card
						key={item.id}
						name={item.name}
						image={item.image}
						category={item.category}
						price={item.price}
					/>
				))}
			</div> */
}

// import './App.css';
// import './hooks/useFetch';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Button from './components/button.jsx';

// function App() {
// 	return (
// 		<>

// 			const items = useFetch('http://localhost:7000/burgers', []);
// 		</>
// 	);
// }

// export default App;
