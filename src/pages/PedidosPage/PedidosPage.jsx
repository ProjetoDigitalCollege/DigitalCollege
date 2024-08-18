import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./PedidosPage.css";
import OptionsPedidos from "../../Components/OptionsPedidos/OptionsPedidos";
import MeusPedidos from "../../Components/MeusPedidos/MeusPedidos";
import tenisNike from "../../assets/img/tenis-nike-view.svg";

function Pedidos() {
  return (
    <>
      <Header />
      <section className="section-pedidos-page">
        <div className="option-pedidos-page">
          <OptionsPedidos />
        </div>
        <div className="meus-pedidos-page">
          <div className="texto-forms">
            <h4>Meus Pedidos</h4>
            <h5>STATUS</h5>
          </div>
          <hr />
          <MeusPedidos
            foto={tenisNike}
            alt={'tenis'}
            pedido={'2234981932'}
            descricao={'Tênis Nike Revolution 6 Next Nature Masculino'}
            status={'Produto em trânsito'}
          />
          <hr />
          <MeusPedidos
            foto={tenisNike}
            alt={'tenis'}
            pedido={'2234981932'}
            descricao={'Tênis Nike Revolution 6 Next Nature Masculino'}
            status={'Finalizado'}
          />
          <hr />
          <MeusPedidos
            foto={tenisNike}
            alt={'tenis'}
            pedido={'2234981932'}
            descricao={'Tênis Nike Revolution 6 Next Nature Masculino'}
            status={'Cancelado'}
          />
          <hr />
          <MeusPedidos
            foto={tenisNike}
            alt={'tenis'}
            pedido={'2234981932'}
            descricao={'Tênis Nike Revolution 6 Next Nature Masculino'}
            status={'Finalizado'}
          />
          <hr />
          <MeusPedidos
            foto={tenisNike}
            alt={'tenis'}
            pedido={'2234981932'}
            descricao={'Tênis Nike Revolution 6 Next Nature Masculino'}
            status={'Finalizado'}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pedidos;
