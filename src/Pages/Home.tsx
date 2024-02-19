import React, { FormEvent, useRef, useState } from "react";
import TodoList from "../components/TodoList";
import { useAddTodoMutation } from "../state/api/apiSlice";
import PageWrapper from "../layout/PageWrapper/PageWrapper";

const Home: React.FC = () => {
  const [isShowNewTodo, setIsShowNewTodo] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const inputRef = useRef<HTMLInputElement | null>(null);

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
          // TODO: Refactoring - reuse in TodoItem component as well
          <form onSubmit={submitEventHandler}>
            <input
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
        <TodoList />
      </main>
    </PageWrapper>
  );
};

export default Home;
