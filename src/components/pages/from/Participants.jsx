import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Participants() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
          <div className="Participiants-heading">
            <h2 className="modal-title">
              Select Participiants
              <br />
              And Dates
            </h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="tab-content " id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <label for="" className="w-100 pb-2">
                Total Price
              </label>
              <h4 className="form-heading"> €5000.0</h4>
              <label for="" className="w-100">
                All taxes fees included
              </label>
              <form action="" className="mein-form">
                <div className="mb-3">
                  <input className="from-inputs-parti" type="text" name="" />
                </div>
                <div className="mb-3">
                  <input className="from-inputs-parti" type="date" name="" />
                </div>
                <div className="mb-3">
                  <input className="from-inputs-parti" type="text" name="" />
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <button
            type="submit"
            className="sec-btn border-0"
            style={{ padding: "10px  50px" }}
          >
            {" "}
            Check Availability
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Participants;
