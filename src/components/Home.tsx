import React from "react";

function Home() {
	return (
		<>
			<div>Home</div>
			<button className=".border-x-105">Click Me</button>
			<button type="button" className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-default">
				<span className="usa-banner__button-text">Here’s how you know</span>
			</button>

			<h3 className="site-preview-heading">Standard alerts</h3>

			<div className="usa-alert usa-alert--info">
				<div className="usa-alert__body">
					<h4 className="usa-alert__heading">Informative status</h4>
					<p className="usa-alert__text">
						Lorem ipsum dolor sit amet,
						<a className="usa-link" href="javascript:void(0);">
							consectetur adipiscing
						</a>
						elit, sed do eiusmod.
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
