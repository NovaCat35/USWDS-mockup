import React from "react";

function Accordion() {
	return (
		<>
			<div className="usa-accordion margin-top-2">
				<h4 className="usa-accordion__heading">
					<button type="button" className="usa-accordion__button" aria-expanded="true" aria-controls="a1">
						10 Important Components 
					</button>
				</h4>
				<div id="a1" className="usa-accordion__content usa-prose">
					<p>I asked ChatGPT what is the top 10 USWDS components I should look at based on common use and flexibility, here's what it says:</p>
					<ul>
						{" "}
						<li>Accordion – For collapsible sections, ideal for managing large content.</li>
						<li>Alert – Essential for displaying messages or warnings.</li>
						<li>Button – A core interactive component, often customized.</li>
						<li>Date picker – Useful for forms that require date inputs.</li>
						<li>File input – Common for uploading documents or media.</li>
						<li>Form – The backbone of most web apps requiring user input.</li>
						<li>Grid – Key for creating responsive layouts.</li>
						<li>Modal – Useful for pop-up dialogs or additional info.</li>
						<li>Search – Commonly used for navigation or filtering content.</li>
						<li>Typography – Important for styling text in a design system.</li>
					</ul>
				</div>

				<h4 className="usa-accordion__heading">
					<button type="button" className="usa-accordion__button" aria-expanded="false" aria-controls="a2">
						Second Amendment
					</button>
				</h4>
				<div id="a2" className="usa-accordion__content usa-prose">
					<p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p>
					<ul>
						<li>This is a list item</li>
						<li>Another list item</li>
					</ul>
				</div>

				<h4 className="usa-accordion__heading">
					<button type="button" className="usa-accordion__button" aria-expanded="false" aria-controls="a3">
						Third Amendment
					</button>
				</h4>
				<div id="a3" className="usa-accordion__content usa-prose">
					<p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</p>
				</div>
			</div>
		</>
	);
}

export default Accordion;
