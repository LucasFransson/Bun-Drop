import { BrowserRouter as Router, Outlet, useLocation } from 'react-router-dom';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Header from './components/Header';
import RoutesConfig from './utils/RoutesConfig';
import { CartProvider } from './utils/CartContext';

function App() {
	return (
		<Router>
			<CartProvider>
				<div className="container">
					<Header />
					<div className="content">
						<SideNav />
						<div className="content__menu">
							<RoutesConfig />
						</div>
					</div>
					<Footer />
				</div>
			</CartProvider>
		</Router>
	);
}

export default App;

// function App() {
// 	// useLocation hook for checking if the url is menu or not, if it is then use the content__menu with a different flex-direction
// 	const location = useLocation();
// 	const isMenuPage = location.pathname === '/menu';
// 	return (
// 		<Router>
// 			<CartProvider>
// 				<div className="container">
// 					<Header />
// 					<div className={`content ${isMenuPage ? 'content__menu' : ''}`}>
// 						<SideNav />
// 						<RoutesConfig />
// 					</div>
// 					<Footer />
// 				</div>
// 			</CartProvider>
// 		</Router>
// 	);
// }

// export default App;
