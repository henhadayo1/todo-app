import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Link } from "react-router-dom";
import todoLogo from "/public/assets/todo-logo.png";
import Todos from "./pages/Todos";

function App() {
  return (
    <>
      <header>
        <img src={todoLogo} alt="Todo logo" style={{ width: "3rem" }} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>Footer</footer>
    </>
  );
}

export default App;
