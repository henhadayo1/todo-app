import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";
import { apiSlice } from "./api/apiSlice";
import { rtkQueryErrorLogger } from "./api/rtkQueryErrorLogger";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, rtkQueryErrorLogger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
