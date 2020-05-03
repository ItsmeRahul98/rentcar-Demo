import React, { forwardRef } from "react";
import { Modal } from "react-bootstrap";
import "./ModalComponent.scss";
import confirmImg from '../../assets/images/confirm.PNG'


const ModalComponent = props => {
  const { modalMessage,carName, duration, errorModal, onContinueClick, show, isValid } = props;

  return props.show ? (
    <Modal
      show={show}
      onClose={props.onHide}
      // delay={5000}
      // autohide
      classname="Modal"
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="leftImg">
        <img src={confirmImg} className="img" />
      </div>
      <div className="rightContent">
        {isValid && <span className="title">Booking Confirmed !</span>}
        {!isValid && <span className="title">Error</span>}
      {isValid &&
      <div>
      <div>
         <span className="simple">you have booked </span>
        <span>{carName}</span>
      </div>
      <div>
        <span className="simple">for the duration</span>
        <span>{duration}</span>
      </div>
      </div>}
        {!isValid &&
          <div>
               <span className="simple">{modalMessage}</span>
            </div>
        }
        <div className="continuelink" onClick={onContinueClick}>
        <a>
                Continue
              </a>
        </div>
      </div>

    </Modal>
  ) : null;
};

ModalComponent.defaultsProps = {
  ModalMessage: ""
};

export default ModalComponent;
