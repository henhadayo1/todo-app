import React, { ChangeEvent, useState } from "react";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../state/api/apiSlice";

interface TodoProps {
  id: string;
  text: string;
}

const TodoItemOld: React.FC<TodoProps> = ({ id, text }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(text);
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  function deleteClickEventHandler() {
    deleteTodo(id);
  }

  function updateEventClickHandler() {
    updateTodo({ _id: id, text: inputValue });
  }

  return (
    <div>
      {isEdit ? (
        <input
          type="text"
          value={inputValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
        />
      ) : (
        text
      )}
      <button onClick={deleteClickEventHandler}>X</button>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>

      {isEdit && <button onClick={updateEventClickHandler}>Update</button>}
    </div>
  );
};

export default TodoItemOld;
