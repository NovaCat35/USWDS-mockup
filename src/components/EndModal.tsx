import React, { useState } from "react";
import metroCat from "../assets/uswds/img/metro_cat.gif";

function EndModal() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<button onClick={openModal} className="border-2px margin-x-2 radius-md hover:bg-base-darker hover:text-accent-cool-light hover:border-blue cursor-pointer">
				Click Me
			</button>

			{isOpen && (
				<div className="modal-overlay">
					<div className="modal-content">
						{/* <span className="close-button" onClick={closeModal}>
							&times;
						</span> */}
						<button className="close-button" aria-label="Close this modal" onClick={closeModal}>
							×
						</button>
						<img src={metroCat} alt="Metro Cat" className="modal-image" />
						<p>Thanks for viewing!</p>
					</div>
				</div>
			)}

			<style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          position: relative;
        }
        .modal-image {
          max-width: 100%;
          height: auto;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
		</>
	);
}

export default EndModal;
