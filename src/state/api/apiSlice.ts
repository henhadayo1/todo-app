import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Todo from "../../models/Todo";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TODOS_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
    }),
    addTodo: builder.mutation<Todo, string>({
      query: (text) => ({
        url: "/todos",
        method: "POST",
        body: { text },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = apiSlice;
