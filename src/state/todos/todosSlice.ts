import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Todo from "../../models/Todo";
import axios from "axios";

interface TodosState {
  todos: Todo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  status: "idle",
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

// TODO: Code refactoring here
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return (await axios.get<Todo[]>("http://localhost:4000/todos")).data;
});

export default todosSlice.reducer;
