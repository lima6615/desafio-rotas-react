import { NavLink } from "react-router-dom";
import "./syles.css";

function ProdutosNavbar() {
  return (
    <div className="dsd-produtos-navbar mb20">
      <NavLink to="computers" className={({ isActive }) => (isActive ? "menu-link" : "")}>
        <p>Computadores</p>
      </NavLink>
      <NavLink to="eletronics" className={({ isActive }) => (isActive ? "menu-link" : "")}>
        <p>Eletrônicos</p>
      </NavLink>
      <NavLink to="books" className={({ isActive }) => (isActive ? "menu-link" : "")}>
        <p>Livros</p>
      </NavLink>
    </div>
  );
}

export default ProdutosNavbar;
