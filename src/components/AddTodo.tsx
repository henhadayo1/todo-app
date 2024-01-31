import { ChangeEvent, FormEvent, useState } from "react";
import { useAddTodoMutation } from "../state/api/apiSlice";
import Button from "../styles/button.styled";
import Input from "../styles/input.styled";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [addTodo, { isLoading, isError, error }] = useAddTodoMutation();

  async function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(inputValue);
  }

  return (
    <form onSubmit={submitEventHandler}>
      <Input
        type="text"
        placeholder="Add new todo"
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
      />
      <Button>Add Todo</Button>
      {isLoading && <div>Adding new todo...</div>}
      {isError && <div> {error?.toString() || "Failed to add a todo"}</div>}
    </form>
  );
};

export default AddTodo;
