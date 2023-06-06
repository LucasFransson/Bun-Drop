import { Link } from 'react-router-dom';

function Main() {
	return (
		<main className="main">
			<section className="section-hero">
				<div className="section-hero__content">
					<h2 className="section-hero__title">Classic Beef Burger</h2>
					<p className="section-hero__paragraph">
						A timeless classic with our special seasoning.
					</p>
					<img
						src={'/public/images/burger8.png'}
						className="section-hero__image"
					></img>
				</div>

				<Link to={`/menu/1`} className="section-hero__button">
					<span className="section-hero__button-text">ORDER NOW</span>
				</Link>
			</section>
			<section className="section-info">Info Section</section>
		</main>
	);
}

export default Main;
