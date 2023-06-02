import '../css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import ProductPage from './pages/ProductPage';
import Menu from './pages/Menu';
import Card from './components/MenuItemCard';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './utils/CartContext';

function App() {
	const items = useFetch('http://localhost:7000/burgers', []);

	return (
		<>
			<CartProvider>
				<Router>
					<Link to={'/menu'}>
						<button>Menu</button>
					</Link>

					<div>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/menu/:burgerId" element={<ProductPage />} />
							<Route path="/menu" element={<Menu />} />
						</Routes>
					</div>
				</Router>
				<Footer />

				<Cart />
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
