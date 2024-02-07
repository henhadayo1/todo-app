import React, { FormEvent, useRef, useState } from "react";
import { useUpdateTodoMutation } from "../state/api/apiSlice";

interface TodoItemProps {
  _id: string;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ _id, text }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
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

  return <li onClick={() => setIsEdit(true)}>{text}</li>;
};

export default TodoItem;
