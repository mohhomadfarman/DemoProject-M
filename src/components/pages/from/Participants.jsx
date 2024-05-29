import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Participants(props) {


  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props?.show} onHide={()=>props?.handleClose()} className="custom-modal">
        <Modal.Header  className="custom-modal-header justify-content-end">
        <button onClick={()=>props?.handleClose()} type="button" class="close custom-close bg-white border-0 " data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <img src="https://demogswebtech.com/mallorca/public/images/custom-img/close.svg" alt=""/></span>
        </button>
        </Modal.Header>
        <Modal.Body>
        <div className="Participiants-heading">
            <h2 className="modal-title">
              Select Participiants
              <br />
              And Dates
            </h2>
          </div>
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
