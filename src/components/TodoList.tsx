import { useEffect } from "react";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../state/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "../state/hooks";

const TodoList = () => {
  const dispatch = useAppDispatch();

  const {
    todos,
    status: todosStatus,
    error: todosError,
  } = useAppSelector((state) => state.todos);

  useEffect(() => {
    if (todosStatus === "idle") {
      dispatch(fetchTodos());
    }
  }, [todosStatus, dispatch]);

  return (
    <div>
      {todosStatus === "loading" && <span>Fetching todos...</span>}
      {todosStatus === "failed" && <span>{todosError}</span>}
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo._id} id={todo._id} text={todo.text} />
        ))}
    </div>
  );
};

export default TodoList;
