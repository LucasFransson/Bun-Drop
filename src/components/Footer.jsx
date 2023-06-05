import React from 'react';

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__navigation">
					<ul className="footer__list">
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
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Footer;
