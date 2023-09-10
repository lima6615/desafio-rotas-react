import { Outlet } from "react-router-dom";
import ProdutosNavbar from "../../../components/ProdutosNavbar";
import "./styles.css";

function Produtos() {
  return(
     <section className="mt20 dsd-container">
        <ProdutosNavbar />
        <Outlet />
    </section>
  );
}

export default Produtos;
