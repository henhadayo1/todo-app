import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../state/hooks";
import { addTodo } from "../state/todos/todosSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();
  //TODO: Add status and error in state from redux

  function submitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(addTodo(inputValue));
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
      {/* {isLoading && <span>Sending data...</span>}
      {errorMessage && <span>{errorMessage}</span>} */}
    </form>
  );
};

export default AddTodo;
