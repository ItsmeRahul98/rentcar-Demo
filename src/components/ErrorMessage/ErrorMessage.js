import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ErrorMessage.scss";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import Constants from "../../util/constants";

const ErrorMessage = props => {
  const { show, onClose } = props;

  return (
    <div className="ErrorMessagePopup">
      <Modal
        {...props}
        size="md"
        className="modalMain"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
      >
        <Modal.Body>
          <div className="erroricon">
            <span className="banquet-error"></span>
          </div>

          <div className="errorcontent">
            <h1>{Constants.ErrorMessageTitle}</h1>
            <p>{Constants.ErrorMessageSubTitle}</p>
          </div>

          {/* <div className="dismissbtn">
            <ButtonCustom onClick={() => console.log("Dismiss")}>Dismiss</ButtonCustom>
          </div> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ErrorMessage;
