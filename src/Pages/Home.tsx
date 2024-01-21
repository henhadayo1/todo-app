import axios, { AxiosError } from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Todo from "../Models/Todo";

const Home: React.FC = () => {
  const [input, setInput] = useState<string>("");

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
    </>
  );
};

export default Home;
