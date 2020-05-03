import React from "react";
import { Form } from "react-bootstrap";
import "./TextBox.scss";

const TextBox = props => {
  let {
    autoComplete,
    placeholder,
    isPassword,
    title,
    type,
    value,
    name,
    handleChange,
    handleBlur,
    error,
    disabled,
    autoFocus,
    mandatory
  } = props;
  return (
    <div className="textBox">
      <Form.Group controlId="formBasicEmail">
       {title && <Form.Label className="title">{title}</Form.Label>}
        {mandatory && <span className="mandatoryMark">*</span>}
        <div className="inputBox">
          <Form.Control
            autoComplete={autoComplete}
            type={type}
            disabled={disabled}
            className={error && "bordererror"}
            value={value}
            name={name}
            onBlur={() => handleBlur}
            onChange={ev => handleChange(ev.target.value)}
            placeholder={placeholder}
            autoFocus={autoFocus}
          />
        </div>
        {props.children}
      </Form.Group>
    </div>
  );
};

export default TextBox;
