import React, { InputHTMLAttributes, MutableRefObject } from "react";
import StyledInput from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref: MutableRefObject<HTMLInputElement | null>;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
