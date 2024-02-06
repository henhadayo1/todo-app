import React from "react";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <main>
      <section>
        <h2>Todos</h2>
        {/* <AddTodo /> */}
        <TodoList />
      </section>
    </main>
  );
};

export default Home;
