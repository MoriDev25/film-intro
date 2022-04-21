import React from "react";
import { ButtonWrapper } from "./style";

const Button = ({ name, type, onClick, className, on, active, icon }) => {
  return (
    <ButtonWrapper type={type} onClick={onClick} className={className} on={on} active={active}>
      {name}
      <i class={icon}></i>
    </ButtonWrapper>
  );
};

export default Button;
