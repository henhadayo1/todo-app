import { ChangeEvent, FormEvent, useState } from "react";
import useApi from "../hooks/useApi";
import Todo from "../models/Todo";
import { AxiosRequestConfig } from "axios";

const apiConfig: AxiosRequestConfig = {
  method: "POST",
};

const AddTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { sendRequest, isLoading, errorMessage } = useApi<Todo>(
    "todos",
    apiConfig
  );

  function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendRequest({ data: { text: inputValue } });
  }

  return (
    <form onSubmit={submitEventHandler}>
      <input
        type="text"
        placeholder="Add new todo"
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
      />
      <input type="submit" value="Add" />
      {isLoading && <span>Sending data...</span>}
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default AddTodo;
