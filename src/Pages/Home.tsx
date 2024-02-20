import React, { FormEvent, useRef, useState } from "react";
import { useAddTodoMutation, useGetTodosQuery } from "../state/api/apiSlice";
import PageWrapper from "../layout/PageWrapper/PageWrapper";
import Input from "../components/Input/Input";
import TodosList from "../components/TodosList/TodosList";
import TodoItem from "../components/TodoItem/TodoItem";

const Home: React.FC = () => {
  const [isShowNewTodo, setIsShowNewTodo] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    data: todos = [],
    isLoading: isFetchLoading,
    isFetching,
    isError,
    error,
  } = useGetTodosQuery();

  async function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await addTodo(inputValue);
    inputRef.current?.blur();
    setInputValue("");
  }

  return (
    <PageWrapper>
      <header>
        <h2>Todo list</h2>
        <button
          className="plus-button"
          onClick={() => setIsShowNewTodo(true)}
        ></button>
      </header>
      <main>
        {isShowNewTodo && (
          <form onSubmit={submitEventHandler}>
            <Input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onBlur={() => setIsShowNewTodo(false)}
              ref={inputRef}
              autoFocus
            />
            {isLoading && <span>Adding todo...</span>}
          </form>
        )}

        {/* Todos */}
        {(isFetchLoading || isFetching) && <div>Fetching todos...</div>}
        {isError && <div>{error.toString()}</div>}
        <TodosList>
          {todos.map((todoItem) => (
            <TodoItem key={todoItem._id} _id={todoItem._id}>
              {todoItem.text}
            </TodoItem>
          ))}
        </TodosList>
      </main>
    </PageWrapper>
  );
};

export default Home;
