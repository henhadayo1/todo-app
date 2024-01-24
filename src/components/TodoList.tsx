import useApi from "../hooks/useApi";
import Todo from "../models/Todo";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    errorMessage,
  } = useApi<Todo[]>("http://localhost:4000/todos");

  return (
    <div>
      {isLoading && <span>Fetching todos...</span>}
      {errorMessage && <span>{errorMessage}</span>}
      {todos && todos.map((todo) => <div key={todo._id}>{todo.text}</div>)}
    </div>
  );
};

export default TodoList;
