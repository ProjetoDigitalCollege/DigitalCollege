import "./CompraSucesso.css";

function CompraSucesso(topico, label1, label2, result1, result2) {
  return (
    <>
      <div className="minhas-informacoes">
        <hr />
        <div className="detalhe-minhas-informacoes">
          <h2>{topico}</h2>
          <h3>
            {label1} <span>{result1}</span>
          </h3>
          <h3>
            {label2} <span>{result2}</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default CompraSucesso