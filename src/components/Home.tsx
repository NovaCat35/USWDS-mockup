import Navigation from "./navigation";
import Accordion from "./Accordion";
import Alert from "./Alert";
import Footer from "./Footer";

function Home() {
	return (
		<>
			{/* Navigation */}
			<Navigation />

			<main className="margin-x-8">
				<div className="font-serif-3xl margin-y-4 margin-x-8 text-center">
					Hello, World! <br /> Welcome to the NYS demo ground.
				</div>
				{/* HOW TO FLEX THE BELOW? */}
				<div className="display-flex flex-row flex-justify-center">
					<button className="border-2px margin-x-2 radius-md hover:bg-base-darker hover:text-accent-cool-light hover:border-blue">Click Me</button>
					<button className="usa-button" type="button">
						Meet the Team
					</button>
					<button type="button" className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-default">
						<span className="usa-banner__button-text">Here’s how you know</span>
					</button>
				</div>

				<Alert
					alertType="info"
					headerText="Informative status"
					mainTextJSX={
						<p className="usa-alert__text">
							This site was built using &nbsp;{" "}
							<a className="usa-link" href="javascript:void(0);">
								USWDS (U.S. Web Design System)
							</a>
							&nbsp; integrated with React.js for the frontend, and Vite as the development tool and build system.
						</p>
					}
				/>
				<Accordion />
			</main>
			<Footer />
		</>
	);
}

export default Home;
