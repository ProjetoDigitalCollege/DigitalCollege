import "../Header/Header.css";
import logo from "../../assets/img/logo.svg";
import carrinho from "../../assets/img/carrinho.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <header>
        <nav>
          <div className="navs">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="input-icon-search"
              />
              <Link className="link-cadastro" to="/Registrar">
                Cadastre-se
              </Link>
              <div className="button-link-home btn-header-login">
                <Link to="/Login">Entrar</Link>
              </div>
              <Link className="link-carrinho-nav" to="/Cart">
                <img src={carrinho} alt="carrinho" className="icon-carrinho" />
              </Link>
            </div>
            <div className="nav-footer">
              <li>
                <Link
                  to="/"
                  className={
                    path === "/"
                      ? "nav-footer-home selected"
                      : "nav-footer-home"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/ProductList"
                  className={
                    path === "/ProductList"
                      ? "nav-footer-produtos selected"
                      : "nav-footer-produtos"
                  }
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/Error"
                  className={
                    path === "/Error"
                      ? "nav-footer-categorias selected"
                      : "nav-footer-categorias"
                  }
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  to="/Pedidos"
                  className={
                    path === "/Pedidos"
                      ? "nav-footer-pedidos selected"
                      : "nav-footer-pedidos"
                  }
                >
                  Meus Pedidos
                </Link>
              </li>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
