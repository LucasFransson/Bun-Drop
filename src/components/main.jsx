import { Link } from 'react-router-dom';

function Main() {
	return (
		<main className="main">
			<section className="section-hero">
				<Link to={`/menu/2`} className="section-hero__button">
					<span className="section-hero__button-text">ORDER NOW</span>
				</Link>
			</section>
			<section className="section-info">Info Section</section>
		</main>
	);
}

export default Main;
