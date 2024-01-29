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
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos.unshift(action.payload);
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return (await axios<Todo[]>({ url: "todos" })).data;
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text: string) => {
    return (await axios<Todo>({ method: "POST", url: "todos", data: { text } }))
      .data;
  }
);

export default todosSlice.reducer;
