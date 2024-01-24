import useApi from "../hooks/useApi";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isLoading, errorMessage } = useApi<Todo[]>("todos");

  return (
    <div>
      {isLoading && <span>Fetching todos...</span>}
      {errorMessage && <span>{errorMessage}</span>}
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo._id} id={todo._id} text={todo.text} />
        ))}
    </div>
  );
};

export default TodoList;
