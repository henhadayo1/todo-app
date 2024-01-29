import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";

// export interface GenericState<T> {
//   data?: T;
//   status: "idle" | "loading" | "succeeded" | "failed";
// }

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
