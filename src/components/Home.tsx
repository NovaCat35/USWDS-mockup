import Navigation from "./navigation";
import Accordion from "./Accordion";
import Alerts from "./Alerts";
import Footer from "./Footer";

function Home() {
	return (
		<>
			{/* Navigation */}
			<Navigation />

			<main className="margin-x-8">
				<div className="font-serif-3xl margin-y-4 margin-x-8 text-center">Hello World, we're the NYS Design Team!</div>
				{/* HOW TO FLEX THE BELOW? */}
				<div className="display-flex flex-row flex-justify-center">
					<button className="border-2px margin-x-2">Click Me</button>
					<button className="usa-button" type="button">
						Default
					</button>
					<button type="button" className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-default">
						<span className="usa-banner__button-text">Here’s how you know</span>
					</button>
				</div>

				<Alerts />
				<Accordion />
			</main>
         <Footer/>
		</>
	);
}

export default Home;
