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

  return (
    <ul>
      {todos?.map(({ _id: id, text }) => {
        return <TodoItem key={id} _id={id} text={text} />;
      })}
    </ul>
  );
};

export default TodoList;
