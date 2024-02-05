import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Todos: React.FC = () => {
  return (
    <main>
      <section>
        <h2>Todos</h2>
        <AddTodo />
        <TodoList />
      </section>
    </main>
  );
};

export default Todos;
