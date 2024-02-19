import styled from "styled-components";

const StyledPageWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  & > header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default StyledPageWrapper;
