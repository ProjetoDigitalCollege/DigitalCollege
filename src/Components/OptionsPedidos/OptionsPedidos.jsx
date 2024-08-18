import { Link, useLocation } from "react-router-dom";
import "../OptionsPedidos/OptionsPedidos.css";

function OptionsPedidos() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="options-pedidos">
      <div className="options-pedidos-align">
        <Link
          to="/perfil"
          className={path === "/perfil" ? "option-perfil selected" : "option-perfil"}
        >
          Meu Perfil
        </Link>
        <hr />
        <Link
          to="/Pedidos"
          className={path === "/Pedidos" ? "option-pedidos selected" : "option-pedidos"}
        >
          Meus Pedidos
        </Link>
        <hr />
        <Link
          to="/Informacoes"
          className={path === "/Informacoes" ? "option-informacoes selected" : "option-informacoes"}
        >
          Minhas Informações
        </Link>
        <hr />
        <Link
          to="/pagamento"
          className={path === "/pagamento" ? "option-pagamento selected" : "option-pagamento"}
        >
          Método de Pagamento
        </Link>
      </div>
    </div>
  );
}

export default OptionsPedidos;
