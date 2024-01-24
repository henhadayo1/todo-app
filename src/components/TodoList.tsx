import { AxiosRequestConfig } from "axios";
import useApi from "../hooks/useApi";
import Todo from "../models/Todo";

const deleteTodoApiConfig: AxiosRequestConfig = {
  method: "DELETE",
};

const TodoList = () => {
  const { data: todos, isLoading, errorMessage } = useApi<Todo[]>("todos");
  const { sendRequest: deleteTodo } = useApi<Todo>(
    "todos",
    deleteTodoApiConfig
  );

  function deleteClickEventHandler(id: string) {
    deleteTodo({ url: `todos/${id}` });
  }

  return (
    <div>
      {isLoading && <span>Fetching todos...</span>}
      {errorMessage && <span>{errorMessage}</span>}
      {todos &&
        todos.map((todo) => (
          <div key={todo._id}>
            {todo.text}
            <button onClick={() => deleteClickEventHandler(todo._id)}>X</button>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
