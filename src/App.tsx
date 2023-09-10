import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Routes/Home";
import HomeBody from "./Routes/Home/HomeBody";
import Produtos from "./Routes/Home/Produtos";
import ListaComputador from "./Routes/Home/Produtos/ListaComputador";
import ListaEletronicos from "./Routes/Home/Produtos/ListaEletronicos";
import ListaLivros from "./Routes/Home/Produtos/ListaLivros";
import About from "./Routes/Home/About";
import NotFound from "./Routes/Home/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="/home" element={<HomeBody />} />
          <Route path="products" element={<Produtos />}>
            <Route path="computers" element={<ListaComputador />} />
            <Route path="eletronics" element={<ListaEletronicos />} />
            <Route path="books" element={<ListaLivros />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
