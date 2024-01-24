import { ChangeEvent, FormEvent, useState } from "react";
import useApi from "../hooks/useApi";
import Todo from "../models/Todo";
import { AxiosRequestConfig } from "axios";

const apiConfig: AxiosRequestConfig = {
  method: "POST",
};

const AddTodo = () => {
  const [input, setInput] = useState<string>("");

  const { sendRequest, isLoading, errorMessage } = useApi<Todo>(
    import.meta.env.VITE_TODOS_API_URL,
    apiConfig
  );

  function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendRequest({ text: input });
  }

  return (
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
      {isLoading && <span>Sending data...</span>}
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default AddTodo;
