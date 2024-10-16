import React from "react";

function Card() {
	return (
		<>
			<ul className="usa-card-group">
				<li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
					<div className="usa-card__container">
						<div className="usa-card__header">
							<h4 className="usa-card__heading">Card</h4>
						</div>
						<div className="usa-card__body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>
						</div>
						<div className="usa-card__footer">
							<a href="#" className="usa-button">
								Visit Florida Keys
							</a>
						</div>
					</div>
				</li>
				<li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
					<div className="usa-card__container">
						<div className="usa-card__header">
							<h4 className="usa-card__heading">Card with Media</h4>
						</div>
						<div className="usa-card__media">
							<div className="usa-card__img">
								<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image" />
							</div>
						</div>
						<div className="usa-card__body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>
						</div>
						<div className="usa-card__footer">
							<a href="#" className="usa-button">
								Visit Florida Keys
							</a>
						</div>
					</div>
				</li>
				<li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4 usa-card--header-first">
					<div className="usa-card__container">
						<div className="usa-card__header">
							<h4 className="usa-card__heading">Media with header first</h4>
						</div>
						<div className="usa-card__media usa-card__media--exdent">
							<div className="usa-card__img">
								<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image" />
							</div>
						</div>
						<div className="usa-card__body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus similique nemo odit doloremque laudantium?</p>
						</div>
						<div className="usa-card__footer">
							<a href="#" className="usa-button">
								Visit Florida Keys
							</a>
						</div>
					</div>
				</li>
			</ul>
		</>
	);
}

export default Card;
