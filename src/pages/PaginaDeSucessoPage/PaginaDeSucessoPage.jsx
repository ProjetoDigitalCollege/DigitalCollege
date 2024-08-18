import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MinhasInformacoes from "../../Components/MinhasInformacoes/MinhasInformacoes";
import MeusPedidos from "../../Components/MeusPedidos/MeusPedidos";
import tenisNike from "../../assets/img/tenis-nike-view.svg";
import tada from "../../assets/img/tada.png";
import "./PaginaDeSucessoPage.css";
import { Link } from "react-router-dom";

function Sucesso({total, parcela}) {
  return (
    <>
      <Header />
      <section className="sucesso-page">
        <div className="cart-suceso">
          <div className="texto-sucesso">
            <img src={tada} />
            <h4>
              Compra Realizada<br></br>com sucesso!
            </h4>
          </div>
          <div className="info-pessoais info-pessoais-sucesso">
            <MinhasInformacoes
              topico={"Informações Pessoais"}
              label1={"Nome:"}
              label2={"CPF:"}
              label3={"Email:"}
              label4={"Celular:"}
              result1={"Francisco Antonio Pereira"}
              result2={"123485913-35"}
              result3={"francisco@gmail.com"}
              result4={"(85) 5555-5555"}
            />
          </div>
          <div className="info-entrega info-entrega-sucesso">
            <MinhasInformacoes
              topico={"Informações de Entrega"}
              label1={"Endereço:"}
              label2={"Bairro:"}
              label3={"Cidade:"}
              label4={"CEP:"}
              result1={"Rua João Pessoa, 333"}
              result2={"Centro"}
              result3={"Fortaleza, Ceará"}
              result4={"433-8800"}
            />
          </div>
          <div className="info-pagamento info-pagamento-sucesso">
            <MinhasInformacoes 
              topico={"Informações de Pagamento"}
              label1={"Titular do Cartão:"}
              label2={"Final:"}
              result1={"FRANCISCO A P"}
              result2={"**** **** **** **** 2024"}
            />
          </div>
          <div className="info-resumo info-resumo-sucesso">
            <MinhasInformacoes 
              topico={"Resumo da Compra"}
              label1={
                <MeusPedidos
                  foto={tenisNike}
                  alt={"tenis"}
                  pedido={"2234981932"}
                  descricao={"Tênis Nike Revolution 6 Next Nature Masculino"}
                />
              }
            />
          </div>
          <div className="resumo-valor">
            <h2>
              Total: <span>R$ {Number({total}).toFixed(2)}</span>
            </h2>
            <h5>ou 10x de R$ {Number({parcela}).toFixed(2)} sem juros</h5>
          </div>
          <Link className="link-recibo" to="/Error">
            Imprimir Recibo
          </Link>
        </div>
        <div className="button-link-home">
          <Link to="/">
            Voltar para Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sucesso;
