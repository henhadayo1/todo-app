import { useGetTodosQuery } from "../state/api/apiSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetTodosQuery();

  if (isLoading || isFetching) return <div>Fetching todos...</div>;
  if (isError) return <div>{error.toString()}</div>;

  return todos?.map((todo) => {
    return <TodoItem key={todo._id} id={todo._id} text={todo.text} />;
  });
};

export default TodoList;
