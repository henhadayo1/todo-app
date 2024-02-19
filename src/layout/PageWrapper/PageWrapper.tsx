import React from "react";
import StyledPageWrapper from "./PageWrapper.styled";

interface PageWrapperProps {
  children: string | JSX.Element | JSX.Element[];
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
