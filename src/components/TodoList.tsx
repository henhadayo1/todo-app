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

  if (isLoading || isFetching) {
    return "Fetching todos...";
  } else if (isError) {
    return error.toString();
  } else {
    return todos?.map((todo) => {
      return <TodoItem key={todo._id} id={todo._id} text={todo.text} />;
    });
  }
};

export default TodoList;
