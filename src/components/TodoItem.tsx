import { AxiosRequestConfig } from "axios";
import React, { ChangeEvent, useState } from "react";
import useApi from "../hooks/useApi";
import Todo from "../models/Todo";

interface TodoProps {
  id: string;
  text: string;
}

const deleteTodoApiConfig: AxiosRequestConfig = {
  method: "DELETE",
};

const updateTodoApiConfig: AxiosRequestConfig = {
  method: "PATCH",
};

const TodoItem: React.FC<TodoProps> = ({ id, text }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(text);

  const { sendRequest: deleteTodo } = useApi<Todo>(
    "todos",
    deleteTodoApiConfig
  );

  const { sendRequest: updateTodo } = useApi<Todo>(
    "todos",
    updateTodoApiConfig
  );
  function deleteClickEventHandler() {
    deleteTodo({ url: `todos/${id}` });
  }

  function updateEventClickHandler() {
    updateTodo({
      url: `todos/${id}`,
      data: { text: inputValue },
    });
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

export default TodoItem;
