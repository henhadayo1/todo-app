/* eslint-disable no-empty */
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
      // Pessimistic update
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: newTodo } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
              draft.unshift(newTodo);
            })
          );
        } catch {}
      },
    }),
    deleteTodo: builder.mutation<Todo, string>({
      query: (_id) => ({
        url: `/todos/${_id}`,
        method: "DELETE",
      }),
      // Pessimistic update
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
              const findIndex = draft.findIndex((todo) => todo._id === _id);
              draft.splice(findIndex, 1);
            })
          );
        } catch {}
      },
    }),
    updateTodo: builder.mutation<Todo, { _id: string; text: string }>({
      query: ({ _id, text }) => ({
        url: `/todos/${_id}`,
        method: "PATCH",
        body: { text },
      }),
      // Pessimistic update
      async onQueryStarted({ _id, text }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTodos", undefined, (draft) => {
              const findIndex = draft.findIndex((todo) => todo._id === _id);
              draft[findIndex].text = text;
            })
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
