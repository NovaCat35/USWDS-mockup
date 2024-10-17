import logo from "../../public/img/us_flag.svg";

function Navigation() {
	return (
		<>
			{" "}
			<div className="usa-overlay"></div>
			<header className="usa-header usa-header--extended">
				<div className="usa-navbar">
					<div className="usa-logo display-flex">
                  <img className="width-10 tablet:width-5 mobile-lg:width-3 margin-right-2" src={logo} alt="site logo" />
						<em className="usa-logo__text">
							<a href="/" title="<Project title>">
								USWDS Mockup
							</a>
						</em>
					</div>
					<button type="button" className="usa-menu-btn">
						Menu
					</button>
				</div>
				<nav aria-label="Primary navigation" className="usa-nav">
					<div className="usa-nav__inner">
						<button type="button" className="usa-nav__close">
							<img src="../../img/usa-icons/close.svg" role="img" alt="Close" />
						</button>
						<ul className="usa-nav__primary usa-accordion">
							<li className="usa-nav__primary-item">
								<button type="button" className="usa-accordion__button usa-nav__link usa-current" aria-expanded="false" aria-controls="extended-mega-nav-section-one">
									<span>NYS HOME</span>
								</button>
								<div id="extended-mega-nav-section-one" className="usa-nav__submenu usa-megamenu">
									<div className="grid-row grid-gap-4">
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">Greets from NY</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">About the team</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;A very long navigation link that goes onto two lines&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="usa-nav__primary-item">
								<button type="button" className="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
									<span>Design System</span>
								</button>
								<div id="extended-mega-nav-section-two" className="usa-nav__submenu usa-megamenu">
									<div className="grid-row grid-gap-4">
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">Excelsior</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">Design System</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">USWDS Site</a>
												</li>
											</ul>
										</div>
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;A very long navigation link that goes onto two lines&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
										<div className="usa-col">
											<ul className="usa-nav__submenu-list">
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
												<li className="usa-nav__submenu-item">
													<a href="javascript:void(0);">&lt;Navigation link&gt;</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="usa-nav__primary-item">
								<a href="javascript:void(0);" className="usa-nav-link">
									About Us
								</a>
							</li>
						</ul>
						<div className="usa-nav__secondary">
							<ul className="usa-nav__secondary-links"></ul>
							<section aria-label="Search component">
								<form className="usa-search usa-search--small" role="search">
									<label className="usa-sr-only" htmlFor="search-field">
										Search
									</label>
									<input className="usa-input" id="search-field" type="search" name="search" />
									<button className="usa-button" type="submit">
										<img src="../../img/usa-icons-bg/search--white.svg" className="usa-search__submit-icon" alt="Search" />
									</button>
								</form>
							</section>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Navigation;
