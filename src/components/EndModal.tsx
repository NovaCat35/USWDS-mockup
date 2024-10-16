import React, { useState } from "react";
import metroCat from "../assets/uswds/img/metro_cat.gif";

function EndModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <React.Fragment>
      <button onClick={openModal} className="usa-button">Open Modal</button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
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
    </React.Fragment>
  );
}

export default EndModal;
