import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
  background: white;
  color: #1c1d1f;
  z-index: 1000;
`;

export default StyledHeader;
