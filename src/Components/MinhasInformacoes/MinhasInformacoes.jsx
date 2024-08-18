import "../MinhasInformacoes/MinhasInformacoes.css"

// eslint-disable-next-line react/prop-types
function MinhasInformacoes({ topico, label1, label2, label3, label4, result1, result2, result3, result4}) {

  return (
    <>
      <div className="minhas-informacoes">
        <hr />
        <div className="detalhe-minhas-informacoes">
          <h2>{topico}</h2>
          <h3>{label1} <span>{result1}</span></h3>
          <h3>{label2} <span>{result2}</span></h3>
          <h3>{label3} <span>{result3}</span></h3>
          <h3>{label4} <span>{result4}</span></h3>
        </div>
      </div>
    </>
  );
}

export default MinhasInformacoes
