import React from "react";

// reactstrap components
import { Button, Modal, ModalBody } from "reactstrap";

import EventForm from "./form";

function FormModal(props) {
  const [largeModal, setLargeModal] = React.useState(true);
  return (
    <>
      <Modal
        isOpen={props.active}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        toggle={() => setLargeModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="myLargeModalLabel">
            Create an Event
          </h4>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => props.action(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <EventForm createEvent={props.event} disableModal={props.action} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default FormModal;
