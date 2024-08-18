import "../MeusPedidos/MeusPedidos.css";

// eslint-disable-next-line react/prop-types
function MeusPedidos({ foto, alt, pedido, descricao, status }) {
  return (
    <>
      <div className="meus-pedidos">
        <div className="detalhe-meus-pedidos">
          <div className="img-meus-pedidos">
            <img src={foto} alt={alt} />
          </div>
          <div className="info-pedido">
            <h6>Pedido nº {pedido}</h6>
            <h4>{descricao}</h4>
          </div>
          <h3>{status}</h3>
        </div>
      </div>
    </>
  );
}

export default MeusPedidos;
