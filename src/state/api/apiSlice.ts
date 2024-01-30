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
  }),
});

export const { useGetTodosQuery } = apiSlice;
