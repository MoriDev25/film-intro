import React from "react";
import { InputWrapper } from "./style";

const Input = ({ name, type, className, value, onChange, id, placeholder, onKeyPress }) => {
  return (
    <InputWrapper
      name={name}
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  );
};
export default Input;
