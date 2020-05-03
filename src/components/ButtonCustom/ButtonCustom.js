import React from "react";
import "./ButtonCustom.scss";

//rahul
//write style for disbaled button

const ButtonCustom = props => {
  let { titleBtn, type, onClick, className, disabled } = props;
  const PrimaryBack = {
    backgroundColor: localStorage.getItem("color")
  };
  const Primarytext = {
    color: localStorage.getItem("color")
  };
  return (
    <div className="btnComponentMain">
      <button
        style={PrimaryBack}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={className}
      >
        {props.children}
        {titleBtn}
      </button>
    </div>
  );
};
export default ButtonCustom;
