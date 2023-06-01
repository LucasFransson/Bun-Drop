import React from 'react';

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__container--upper">
					<ul className="footer__list">
						<a href="#" className="footer__link">
							Company
						</a>
						<a href="#" className="footer__link">
							Support
						</a>
						<a href="#" className="footer__link">
							Contact Us
						</a>
						<img
							src="./public/images/logo color-1.png"
							alt="Colorized Bun Drop logo"
							className="footer__logo"
						></img>
						<a href="#" className="footer__link">
							Privacy Policy
						</a>
						<a href="#" className="footer__link">
							Partners
						</a>
						<a href="#" className="footer__link">
							Terms
						</a>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Footer;
