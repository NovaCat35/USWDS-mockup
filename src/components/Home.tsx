import React from "react";
import Navigation from "./navigation"

function Home() {
	return (
		<>
			{/* Navigation */}
			<Navigation/>
         
			<div className="font-serif-3xl margin-y-4 margin-x-8 text-center">Hello World, we're the NYS Design Team!</div>
			{/* HOW TO FLEX THE BELOW? */}
			<div className="display-flex flex-row flex-justify-center">
				<button className=".border-x-105 margin-x-2">Click Me</button>
				<button className="usa-button" type="button">
					Default
				</button>
				<button type="button" className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-default">
					<span className="usa-banner__button-text">Here’s how you know</span>
				</button>
			</div>

			{/* ICONS are missing as well as some className styling */}
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

			<div className="usa-alert usa-alert--warning">
				<div className="usa-alert__body">
					<h4 className="usa-alert__heading">Warning status</h4>
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
