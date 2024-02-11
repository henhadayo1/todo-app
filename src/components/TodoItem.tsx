import React, { FormEvent, useRef, useState } from "react";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../state/api/apiSlice";

interface TodoItemProps {
  _id: string;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ _id, text }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await updateTodo({ _id, text: inputValue });
    inputRef.current?.blur();
  }

  function inputBlurEventHandler() {
    setIsEdit(false);
    setInputValue(text);
  }

  if (isEdit) {
    return (
      <li>
        <form onSubmit={submitEventHandler}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onBlur={inputBlurEventHandler}
            ref={inputRef}
            autoFocus
          />
          {isLoading && <span>Updating...</span>}
        </form>
      </li>
    );
  }

  return (
    <li>
      <span onClick={() => setIsEdit(true)}>{text}</span>
      <button
        className="delete-button"
        onClick={() => deleteTodo(_id)}
      ></button>
    </li>
  );
};

export default TodoItem;
