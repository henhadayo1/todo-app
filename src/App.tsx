import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper-container">
      <header>
        <h1>Todo App</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque facere inventore
        dolor, distinctio explicabo possimus sunt unde dolorem consectetur
        dignissimos accusamus nihil officia? Eos eveniet rerum quis molestiae
        adipisci inventore!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Itaque facere inventore dolor, distinctio explicabo possimus sunt
        unde dolorem consectetur dignissimos accusamus nihil officia? Eos
        eveniet rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Itaque facere inventore dolor,
        distinctio explicabo possimus sunt unde dolorem consectetur dignissimos
        accusamus nihil officia? Eos eveniet rerum quis molestiae adipisci
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque facere inventore dolor, distinctio explicabo possimus sunt unde
        dolorem consectetur dignissimos accusamus nihil officia? Eos eveniet
        rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Itaque facere inventore dolor, distinctio
        explicabo possimus sunt unde dolorem consectetur dignissimos accusamus
        nihil officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque facere inventore
        dolor, distinctio explicabo possimus sunt unde dolorem consectetur
        dignissimos accusamus nihil officia? Eos eveniet rerum quis molestiae
        adipisci inventore!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Itaque facere inventore dolor, distinctio explicabo possimus sunt
        unde dolorem consectetur dignissimos accusamus nihil officia? Eos
        eveniet rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Itaque facere inventore dolor,
        distinctio explicabo possimus sunt unde dolorem consectetur dignissimos
        accusamus nihil officia? Eos eveniet rerum quis molestiae adipisci
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque facere inventore dolor, distinctio explicabo possimus sunt unde
        dolorem consectetur dignissimos accusamus nihil officia? Eos eveniet
        rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Itaque facere inventore dolor, distinctio
        explicabo possimus sunt unde dolorem consectetur dignissimos accusamus
        nihil officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque facere inventore
        dolor, distinctio explicabo possimus sunt unde dolorem consectetur
        dignissimos accusamus nihil officia? Eos eveniet rerum quis molestiae
        adipisci inventore!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Itaque facere inventore dolor, distinctio explicabo possimus sunt
        unde dolorem consectetur dignissimos accusamus nihil officia? Eos
        eveniet rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Itaque facere inventore dolor,
        distinctio explicabo possimus sunt unde dolorem consectetur dignissimos
        accusamus nihil officia? Eos eveniet rerum quis molestiae adipisci
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque facere inventore dolor, distinctio explicabo possimus sunt unde
        dolorem consectetur dignissimos accusamus nihil officia? Eos eveniet
        rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Itaque facere inventore dolor, distinctio
        explicabo possimus sunt unde dolorem consectetur dignissimos accusamus
        nihil officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque facere inventore
        dolor, distinctio explicabo possimus sunt unde dolorem consectetur
        dignissimos accusamus nihil officia? Eos eveniet rerum quis molestiae
        adipisci inventore!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Itaque facere inventore dolor, distinctio explicabo possimus sunt
        unde dolorem consectetur dignissimos accusamus nihil officia? Eos
        eveniet rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Itaque facere inventore dolor,
        distinctio explicabo possimus sunt unde dolorem consectetur dignissimos
        accusamus nihil officia? Eos eveniet rerum quis molestiae adipisci
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque facere inventore dolor, distinctio explicabo possimus sunt unde
        dolorem consectetur dignissimos accusamus nihil officia? Eos eveniet
        rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Itaque facere inventore dolor, distinctio
        explicabo possimus sunt unde dolorem consectetur dignissimos accusamus
        nihil officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        inventore dolor, distinctio explicabo possimus sunt unde dolorem
        consectetur dignissimos accusamus nihil officia? Eos eveniet rerum quis
        molestiae adipisci inventore!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque facere inventore dolor, distinctio explicabo
        possimus sunt unde dolorem consectetur dignissimos accusamus nihil
        officia? Eos eveniet rerum quis molestiae adipisci inventore!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque facere inventore
        dolor, distinctio explicabo possimus sunt unde dolorem consectetur
        dignissimos accusamus nihil officia? Eos eveniet rerum quis molestiae
        adipisci inventore!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Itaque facere inventore dolor, distinctio explicabo possimus sunt
        unde dolorem consectetur dignissimos accusamus nihil officia? Eos
        eveniet rerum quis molestiae adipisci inventore!Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Itaque facere inventore dolor,
        distinctio explicabo possimus sunt unde dolorem consectetur dignissimos
        accusamus nihil officia? Eos eveniet rerum quis molestiae adipisci
        inventore!
      </main> */}
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
