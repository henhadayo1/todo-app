import { AxiosRequestConfig } from "axios";
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import Todo from "../models/Todo";

interface TodoProps {
  id: string;
  text: string;
}

const deleteTodoApiConfig: AxiosRequestConfig = {
  method: "DELETE",
};

const TodoItem: React.FC<TodoProps> = ({ id, text }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { sendRequest: deleteTodo } = useApi<Todo>(
    "todos",
    deleteTodoApiConfig
  );
  function deleteClickEventHandler(id: string) {
    deleteTodo({ url: `todos/${id}` });
  }

  return (
    <div>
      {text}
      {isEdit ? <input type="text" value={text} /> : text}
      <button onClick={() => deleteClickEventHandler(id)}>X</button>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
    </div>
  );
};

export default TodoItem;
