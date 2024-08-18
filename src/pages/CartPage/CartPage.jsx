import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Cards/Cards"
import Cards2 from "../../Components/Cards/Cards2"
import ResumoCompra from "../../Components/ResumoCompra/ResumoCompra"
import MeuCarrinho from "../../Components/MeuCarrinho/MeuCarrinho"
import "./CartPage.css"
import flechaRosa from "../../assets/img/flecha_icon.svg"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

import sapatoAzul from "../../assets/img/sapato_card.png"

function Cart() {
  const [count, setCount] = useState(1);
  const valorAtual = 219.00;
  const frete = 20.00; 
  const desconto = 10.00; 

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products");
        setCharacter(response.data);
        console.log("API response:", response.data);
        console.log(`deu certo`);
      } catch (error) {
        console.log(`o erro foi ${error}`);
      }
    };
    fetchData();
  }, []);

  const multiploAtual = count * valorAtual;

  return (
    <>
      <Header />
      <section className="resumo-compra">
        <MeuCarrinho 
          descricao={'Tênis Nike Revolution 6 Next Nature Masculino'}
          cor={'Vermelho / Branco'}
          tamanho={'42'}
          valorAntigo={219.00}
          valorAtual={valorAtual}
          setCount={setCount}
          count={count}
          multiploAtual={multiploAtual} 
        />
        <ResumoCompra 
          frete={frete}
          desconto={desconto}
          multiploAtual={multiploAtual}
        />
      </section>
      <section className="container-produtos-em-alta section-cart">
        <div className="produtos-em-alta">
          <div className="topico-section">
            <h1>Produtos Relacionados</h1>
            <h2><Link to="/ProductList" className="link-ver-todos">Ver todos <img src={flechaRosa} alt="flecha" /></Link></h2>
          </div>
          <div className="produto-em-alta-cards section-cart-cards">
            {Array.isArray(character) && character.slice(30, 34).map(card => (
                card.desconto === true ? (
                  <Cards2 
                    key={card.id} 
                    oferta={card.valordesconto} 
                    foto={sapatoAzul} 
                    titulo={card.titulo} 
                    descricao={card.descricao} 
                    valorantigo={card.valorantigo} 
                    valoratual={card.valoratual} 
                  />
                ) : (
                  <Cards 
                    key={card.id} 
                    foto={sapatoAzul} 
                    titulo={card.titulo} 
                    descricao={card.descricao} 
                    valorantigo={card.valorantigo} 
                    valoratual={card.valoratual} 
                  />
                )
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
