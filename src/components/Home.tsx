import Navigation from "./Navigation";
import Accordion from "./Accordion";
import Alert from "./Alert";
import Grid from "./Grid";
import Card from "./Card";
import Footer from "./Footer";
import EndModal from "./EndModal";

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
					<EndModal />
					<button className="usa-button" type="button">
						Meet the Team
					</button>
					<button type="button" className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-default">
						<span className="usa-banner__button-text">Here’s how you know</span>
					</button>
				</div>

				<h3 className="site-preview-heading">Technology Stack</h3>
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
				<Grid />
				<Card />

				<Alert alertType="warning" headerText="Known Issues" mainTextStr="A standard script tag linking to src/assets/uswds/js/uswds.js is ineffective unless a JavaScript timeout is initially set. This ensures the script loads properly after the page content is ready. Additionally, some responsive parts are lacking (e.g. setting responsive images)." />
			</main>
			<Footer />
		</>
	);
}

export default Home;
