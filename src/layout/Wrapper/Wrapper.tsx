import React from "react";
import StyledWrapper from "./Wrapper.styled";

interface WrapperProps {
  children: string | JSX.Element | JSX.Element[];
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
