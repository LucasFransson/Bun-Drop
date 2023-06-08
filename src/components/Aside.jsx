import { Link } from 'react-router-dom';
function Aside() {
	return (
		<aside className="section-aside">
			<div className="section-aside__first-div">
				<img
					src={'/public/images/burger-promo-1.png'}
					className="section-aside__photo section-aside__photo--1"
				></img>
			</div>
			<div className="section-aside__second-div">
				<Link className="section-aside__button" to={'/menu'}>
					<span className="section-aside__button-text">MENU</span>
				</Link>
				<img
					src={'/public/images/burger-promo-2.png'}
					className="section-aside__photo section-aside__photo--2"
				></img>
			</div>
			<div className="section-aside__third-div">
				<img
					src={'/public/images/burger-promo-4.png'}
					className="section-aside__photo section-aside__photo--3"
				></img>
			</div>
		</aside>
	);
}
export default Aside;
