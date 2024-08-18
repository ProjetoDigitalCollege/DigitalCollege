import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OptionsPedidos from "../../Components/OptionsPedidos/OptionsPedidos";
import MinhasInformacoes from "../../Components/MinhasInformacoes/MinhasInformacoes";
import "./InformacoesPage.css";
import { Link } from "react-router-dom";

function Informacoes() {
  return (
    <>
      <Header />
      <section className="section-pedidos-page">
        <div className="option-pedidos-page">
          <OptionsPedidos />
        </div>
        <div className="meus-pedidos-page">
          <div className="texto-forms">
            <h4>Minhas Informações</h4>
            <Link to="/criarFormulario">editar</Link>
          </div>
          <MinhasInformacoes
            topico={'Informações Pessoais'}
            label1={'Nome:'}
            label2={'CPF:'}
            label3={'Email:'}
            label4={'Celular:'}
            result1={'Francisco Antonio Pereira'}
            result2={'123485913-35'}
            result3={'francisco@gmail.com'}
            result4={'(85) 5555-5555'}
          />
          <MinhasInformacoes
            topico={'Informações de Entrega'}
            label1={'Endereço:'}
            label2={'Bairro:'}
            label3={'Cidade:'}
            label4={'CEP:'}
            result1={'Rua João Pessoa, 333'}
            result2={'Centro'}
            result3={'Fortaleza, Ceará'}
            result4={'433-8800'}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Informacoes;
