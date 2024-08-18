import "../ResumoCompra/ResumoCompra.css";
import MeusPedidos from "../MeusPedidos/MeusPedidos"
import tenisNike from "../../assets/img/tenis-nike-view.svg"
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ResumoCompra2({ frete, desconto, multiploAtual }) {
  const total = multiploAtual + frete - desconto;
  const parcela = total / 10;

  return (
    <div className="resumo-cart-pedido2">
      <div className="resumo-cart-pedido-info2">
        <h3>RESUMO</h3>
        <hr />
        <MeusPedidos
          foto={tenisNike}
          alt={"tenis"}
          pedido={"2234981932"}
          descricao={"Tênis Nike Revolution 6 Next Nature Masculino"}
        />
        <hr />
        <h4>
          Subtotal: <span>R$ {Number(multiploAtual).toFixed(2)}</span>
        </h4>
        <h4>
          Frete: <span>R$ {Number(frete).toFixed(2)}</span>
        </h4>
        <h4>
          Desconto: <span>R$ {Number(desconto).toFixed(2)}</span>
        </h4>
        <div className="resumo-valor resumo-compra-valor">
          <h2>
            Total: <span>R$ {Number(total).toFixed(2)}</span>
          </h2>
          <h5>ou 10x de R$ {Number(parcela).toFixed(2)} sem juros</h5>
        </div>
        <div className="button-link btn-resumo2">
          <Link to="/Sucesso">Realizar Pagamento</Link>
        </div>
      </div>
    </div>
  );
}
export default ResumoCompra2;
