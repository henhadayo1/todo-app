import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

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

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
