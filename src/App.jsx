import '../css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/main';
import RoutesConfig from './utils/RoutesConfig';
import { CartProvider } from './utils/CartContext';

function App() {
	return (
		<>
			<Router>
				<RoutesConfig />
				<CartProvider>
					<div className="container">
						<Header />
						<div className="content">
							<SideNav />
							<Main />
							<Aside />
						</div>
						<Footer />
					</div>
				</CartProvider>
			</Router>
		</>
	);
}

export default App;
