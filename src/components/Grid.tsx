function Grid() {
	return (
		<>
			<h3 className="border-top margin-top-5 padding-top-2">Grid Playground</h3>
			<p>Stack the columns on mobile by making one full-width and the other half-width</p>
			<div className="grid-row">
				<div className="tablet:grid-col-8 bg-base-darker text-white padding-4">.tablet:grid-col-8</div>
				<div className="grid-col-6 tablet:grid-col-4 bg-gray-50 text-white padding-4">.col-6 .tablet:grid-col-4</div>
			</div>

			<p>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</p>
			<div className="grid-row">
				<div className="grid-col-6 tablet:grid-col-4 bg-gold padding-4">.col-6 .tablet:grid-col-4</div>
				<div className="grid-col-6 tablet:grid-col-4 bg-base-darker text-white padding-4">.col-6 .tablet:grid-col-4</div>
				<div className="grid-col-6 tablet:grid-col-4 bg-gold padding-4">.col-6 .tablet:grid-col-4</div>
			</div>

			<p>Columns are always 50% wide, on mobile and desktop</p>
			<div className="grid-row">
				<div className="grid-col-6 bg-accent-cool-darker text-white padding-4">.col-6</div>
				<div className="grid-col-6 bg-base-darker text-white bg-accent-cool padding-4">.col-6</div>
			</div>
		</>
	);
}

export default Grid;
