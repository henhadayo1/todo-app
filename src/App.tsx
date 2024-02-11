import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className="wrapper-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
