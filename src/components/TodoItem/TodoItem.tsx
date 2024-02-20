import { FormEvent, useRef, useState } from "react";
import StyledTodoItem from "./TodoItem.styled";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../state/api/apiSlice";
import Input from "../Input/Input";

interface TodoItemProps {
  children: string;
  _id: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ children, _id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(children);
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isLoadingDelete }] = useDeleteTodoMutation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await updateTodo({ _id, text: inputValue });
    inputRef.current?.blur();
  }

  function inputBlurEventHandler() {
    setIsEdit(false);
    setInputValue(children);
  }

  if (isEdit) {
    return (
      <StyledTodoItem>
        <form onSubmit={submitEventHandler}>
          <Input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onBlur={inputBlurEventHandler}
            ref={inputRef}
            autoFocus
          />
          {isLoading && <span>Updating...</span>}
        </form>
      </StyledTodoItem>
    );
  }

  return (
    <StyledTodoItem>
      <span onClick={() => setIsEdit(true)}>{children}</span>
      <button
        className="delete-button"
        onClick={() => deleteTodo(_id)}
      ></button>
      {isLoadingDelete && <span>Deleting...</span>}
    </StyledTodoItem>
  );
};

export default TodoItem;
