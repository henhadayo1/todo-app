import React from "react";
import StyledTodosList from "./TodosList.styled";

interface TodosListProps {
  children: string | JSX.Element | JSX.Element[];
}

const TodosList: React.FC<TodosListProps> = ({ children }) => {
  return <StyledTodosList>{children}</StyledTodosList>;
};

export default TodosList;
