import '../css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesConfig from './utils/RoutesConfig';
import { CartProvider } from './utils/CartContext';

function App() {
	const items = useFetch('http://localhost:7000/burgers', []);

	return (
		<>
			<Router>
				<CartProvider>
					<Navbar />
					<RoutesConfig />
					<Footer />
				</CartProvider>
			</Router>
		</>
	);
}

export default App;
