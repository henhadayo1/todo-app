import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Todo from "../../models/Todo";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TODOS_API_BASE_URL,
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<Todo, string>({
      query: (text) => ({
        url: "/todos",
        method: "POST",
        body: { text },
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<Todo, string>({
      query: (_id) => ({
        url: `/todos/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  apiSlice;
