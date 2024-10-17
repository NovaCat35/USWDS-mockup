type AlertsProps = {
	alertType: string; // Define the type as string
	headerText: string; // Define the type as string
	mainTextJSX?: JSX.Element;
	mainTextStr?: string;
};

function Alerts({ alertType, headerText, mainTextJSX, mainTextStr }: AlertsProps) {
	return (
		<>
			<div className={`usa-alert usa-alert--${alertType}`}>
				<div className="usa-alert__body">
					<h4 className="usa-alert__heading">{headerText}</h4>
					{mainTextJSX ? mainTextJSX : <p className="usa-alert__text">{mainTextStr}</p>}
				</div>
			</div>
		</>
	);
}

export default Alerts;
