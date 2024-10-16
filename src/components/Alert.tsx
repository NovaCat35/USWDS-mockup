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
			{/* <div className="usa-alert usa-alert--warning">
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
      </div> */}
		</>
	);
}

export default Alerts;
