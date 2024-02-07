import React from "react";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <div className="home_page-container">
      <header>
        <h2>Todo list</h2>
      </header>
      <main>
        {/* <AddTodo /> */}
        <TodoList />
      </main>
    </div>
  );
};

export default Home;
