import styled from "styled-components";

const StyledTodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    & > .delete-button {
      opacity: 1;
      visibility: visible;
    }
  }
  & > span {
    cursor: pointer;
  }
`;

export default StyledTodoItem;
