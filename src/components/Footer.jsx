import React from 'react';

function Footer() {
	return (
		<>
			<footer className="footer">
				<ul className="footer__list">
					<li className="footer__item">
						<a href="#" className="footer__link">
							Company
						</a>
					</li>
					<li className="footer__item">
						<a href="#" className="footer__link">
							Support
						</a>
					</li>
					<li className="footer__item">
						<a href="#" className="footer__link">
							Contact Us
						</a>
					</li>{' '}
					<li className="footer__item--logo">
						<div className="footer__logo-box">
							<img
								src="/public/images/logo color.png"
								alt="Bun Drop Logo"
								className="footer__logo"
							/>
						</div>
					</li>
					<li className="footer__item">
						<a href="#" className="footer__link">
							Privacy Policy
						</a>
					</li>
					<li className="footer__item">
						<a href="#" className="footer__link">
							Partners
						</a>
					</li>
					<li className="footer__item">
						<a href="#" className="footer__link">
							Terms
						</a>
					</li>
				</ul>
				{/* <ul className="footer__list">
						{[
							'Company',
							'Support',
							'Contact Us',
							'Privacy Policy',
							'Partners',
							'Terms',
						].map((item) => (
							<li className="footer__item" key={item}>
								<a href="#" className="footer__link">
									{item}
								</a>
							</li>
						))}
						<li className="footer__item">
							<div className="footer__logo-box">
								<img
									src="/public/images/logo color.png"
									alt="Bun Drop Logo"
									className="footer__logo"
								/>
							</div>
						</li>
					</ul> */}
			</footer>
		</>
	);
}

export default Footer;
