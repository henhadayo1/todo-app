import React from "react";

interface TodoItemProps {
  _id: string;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default TodoItem;
