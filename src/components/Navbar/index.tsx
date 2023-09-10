import "./styles.css";
import Home from "../../assets/home.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="dsd-navbar">
      <div className="dsd-link-navbar">
        <div className="dsd-text-navbar">
            <NavLink to="/home" className={({isActive}) => isActive ? "menu-link" : ""}>
                <p>Inicio</p>
            </NavLink> 
            <NavLink to="/products" className={({isActive}) => isActive ? "menu-link" : ""}>
                <p>Produtos</p>
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "menu-link" : ""}>
                <p>Sobre nós</p>
            </NavLink>
        </div>
        <Link to="/">
            <img src={Home} alt="home" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
