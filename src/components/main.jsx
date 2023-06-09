// THIS ENTIRE COMPONENTS HERO SECTION STRUCTURE & CSS SHOULD BE REFACTORED !
// Problem with aligning elements in a responsive manner ( change to grid and dont seperate text button & image in seperate divs)

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
			<section className="section-info">
				<img
					src={'/public/images/drone.png'}
					className="section-info__photo"
				></img>
				<div className="section-info__text-button-container">
					<h2 className="section-info__title">Delievery By Drone</h2>
					{/* <Link to={`/info`} className="section-info__button"> */}
					<button className="section-info__button">
						<span className="section-info__button-text">Read More</span>
					</button>
					{/* </Link> */}
				</div>
			</section>
		</main>
	);
}

export default Main;
