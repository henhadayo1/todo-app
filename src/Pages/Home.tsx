import React, { ChangeEvent, FormEvent, useState } from "react";
import Todo from "../models/Todo";
import useApi from "../hooks/useApi";
import { AxiosRequestConfig } from "axios";

const newTodoConfig: AxiosRequestConfig = {
  method: "POST",
};

const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const {
    sendRequest: sendNewTodo,
    isLoading: isSendNewTodoLoading,
    errorMessage: sendNewTodoError,
  } = useApi<Todo>("http://localhost:4000/todos", newTodoConfig);

  const {
    data: todos,
    isLoading: isFetchTodosLoading,
    errorMessage: fetchTodosError,
  } = useApi<Todo[]>("http://localhost:4000/todos");

  function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNewTodo();
  }

  async function addNewTodo() {
    sendNewTodo({ text: input });
  }

  return (
    <>
      <h1>Home page</h1>
      {/* Add todo form */}
      <form onSubmit={submitEventHandler}>
        <input
          type="text"
          placeholder="Add new todo"
          value={input}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
        />
        <input type="submit" value="Add" />
        {isSendNewTodoLoading && <span>Sending data...</span>}
        {sendNewTodoError && <span>{sendNewTodoError}</span>}
      </form>

      {/* Todo list */}
      <div>
        {isFetchTodosLoading && <span>Fetching todos...</span>}
        {fetchTodosError && <span>{fetchTodosError}</span>}
        {todos && todos.map((todo) => <div key={todo._id}>{todo.text}</div>)}
      </div>
    </>
  );
};

export default Home;
