import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Menu from '../pages/Menu';
import Cart from '../components/Cart';
import NotFoundPage from '../pages/NotFoundPage';
import LoginForm from '../components/LoginForm';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Info from '../pages/Info';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route index element={<Outlet />} />
				<Route path="aside" element={<Aside />} />
			</Route>
			<Route path="/menu/:burgerId" element={<ProductPage />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/cart" element={<Cart />}></Route>
			<Route path="/info" element={<Info />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="*" element={NotFoundPage} />
		</Routes>
	);
};

export default RoutesConfig;

// There is some nested paths going on here, documentation for understanding the logic here.
// when the url is exactly / the homepage is rendered
// the nested routes inside this routes are child routes that iujsajhdaiushduiashda I HATE REACT I HATE REACT I HATE REACT
