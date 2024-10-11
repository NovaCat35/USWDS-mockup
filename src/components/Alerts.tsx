import React from "react";

function Alerts() {
	return (
		<>
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

export default Alerts;
