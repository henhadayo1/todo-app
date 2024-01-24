import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home page</h1>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default Home;
