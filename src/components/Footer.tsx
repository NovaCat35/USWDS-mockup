function Footer() {
	return (
		<>
			<footer className="usa-footer margin-top-5">
				<div className="grid-container usa-footer__return-to-top">
					<a href="#">Return to top</a>
				</div>
				<div className="usa-footer__primary-section">
					<nav className="usa-footer__nav" aria-label="Footer navigation">
						<ul className="grid-row grid-gap">
							<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
								<a className="usa-footer__primary-link" href="javascript:void(0);">
									Home
								</a>
							</li>
							<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
								<a className="usa-footer__primary-link" href="javascript:void(0);">
									Components
								</a>
							</li>
							<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
								<a className="usa-footer__primary-link" href="javascript:void(0);">
									Utilities
								</a>
							</li>
							<li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
								<a className="usa-footer__primary-link" href="javascript:void(0);">
									About Us
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="usa-footer__secondary-section">
					<div className="grid-container">
						<div className="grid-row grid-gap">
							<div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
								<div className="mobile-lg:grid-col-auto">
									<img className="usa-footer__logo-img" src="../../img/logo-img.png" alt="" />
								</div>
								<div className="mobile-lg:grid-col-auto">
									<p className="usa-footer__logo-heading">USWDS Mockup</p>
								</div>
							</div>
							<div className="usa-footer__contact-links mobile-lg:grid-col-6">
								<div className="usa-footer__social-links grid-row grid-gap-1">
									<div className="grid-col-auto">
										<a className="usa-social-link" href="javascript:void(0);">
											<img className="usa-social-link__icon" src="../../img/usa-icons/facebook.svg" alt="Facebook" />
										</a>
									</div>
									<div className="grid-col-auto">
										<a className="usa-social-link" href="javascript:void(0);">
											<img className="usa-social-link__icon" src="../../img/usa-icons/twitter.svg" alt="Twitter" />
										</a>
									</div>
									<div className="grid-col-auto">
										<a className="usa-social-link" href="javascript:void(0);">
											<img className="usa-social-link__icon" src="../../img/usa-icons/youtube.svg" alt="YouTube" />
										</a>
									</div>
									<div className="grid-col-auto">
										<a className="usa-social-link" href="javascript:void(0);">
											<img className="usa-social-link__icon" src="../../img/usa-icons/instagram.svg" alt="Instagram" />
										</a>
									</div>
									<div className="grid-col-auto">
										<a className="usa-social-link" href="javascript:void(0);">
											<img className="usa-social-link__icon" src="../../img/usa-icons/rss_feed.svg" alt="RSS" />
										</a>
									</div>
								</div>
								<p className="usa-footer__contact-heading">NYS Design Team</p>
								<address className="usa-footer__address">
									<div className="usa-footer__contact-info grid-row grid-gap">
										<div className="grid-col-auto">
											<a href="tel:1-800-555-5555">(800) 555-GOVT</a>
										</div>
										<div className="grid-col-auto">
											<a href="mailto:info@agency.gov">info@agency.gov</a>
										</div>
									</div>
								</address>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
