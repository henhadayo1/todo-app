import axios, { AxiosError } from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Todo from "../Models/Todo";
import useApi from "../Hooks/useApi";

const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const { data: fetchTodos } = useApi<Todo[]>("http://localhost:4000/todos", {
    method: "GET",
  });

  useEffect(() => {
    console.log(fetchTodos);
    if (fetchTodos) {
      setTodos(fetchTodos);
    }
  }, [fetchTodos]);

  function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNewTodo();
  }

  async function addNewTodo() {
    try {
      const { data: todo } = await axios.post<Todo>(
        "http://localhost:4000/todos",
        {
          text: input,
        }
      );
      setTodos([todo, ...todos]);

      console.log(todo);
    } catch (error: unknown) {
      let errorMessage = "Error has occurred ";
      if (error instanceof AxiosError) {
        errorMessage += error.response?.data?.message;
      } else if (error instanceof Error) {
        errorMessage += error.message;
      }
      console.log(errorMessage);
    }
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
      </form>

      {/* Todo list */}
      <div>
        {todos?.map((todo) => (
          <div key={todo._id}>{todo.text}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
