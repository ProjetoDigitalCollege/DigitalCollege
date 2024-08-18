import "../ResumoCompra/ResumoCompra.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ResumoCompra({ frete, desconto, multiploAtual}) {
  const total = multiploAtual + frete - desconto;
  const parcela = total / 10;

  return (
    <div className="resumo-cart-pedido">
      <div className="resumo-cart-pedido-info">
        <h3>RESUMO</h3>
        <hr />
        <h4>Subtotal: <span>R$ {Number(multiploAtual).toFixed(2)}</span></h4>
        <h4>Frete: <span>R$ {Number(frete).toFixed(2)}</span></h4>
        <h4>Desconto: <span>R$ {Number(desconto).toFixed(2)}</span></h4>
        <h2>Total: <span>R$ {Number(total).toFixed(2)}</span></h2>
        <h5>ou 10x de R$ {Number(parcela).toFixed(2)} sem juros</h5>
        <div className="button-link btn-resumo">
          <Link to='/ConfirmarCompra'>
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ResumoCompra;

