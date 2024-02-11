import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Wrapper from "./layout/Wrapper/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
