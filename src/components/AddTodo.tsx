import { ChangeEvent, FormEvent, useState } from "react";
import { useAddTodoMutation } from "../state/api/apiSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [addTodo, { isLoading, isError, error, isSuccess }] =
    useAddTodoMutation();

  async function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(inputValue);
  }

  function renderIndication() {
    if (isLoading) return <div>Adding new todo...</div>;
    if (isError)
      return <div> {error?.toString() || "Failed to add a todo"}</div>;
    if (isSuccess) return <div>Todo successfully added!</div>;
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
      {renderIndication()}
    </form>
  );
};

export default AddTodo;
