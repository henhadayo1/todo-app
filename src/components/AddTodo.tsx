import { ChangeEvent, FormEvent, useState } from "react";
import { useAddTodoMutation } from "../state/api/apiSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [addTodo, { isLoading, isError, error }] = useAddTodoMutation();

  async function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(inputValue);
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
      <button>Add Todo</button>
      {isLoading && <div>Adding new todo...</div>}
      {isError && <div> {error?.toString() || "Failed to add a todo"}</div>}
    </form>
  );
};

export default AddTodo;
