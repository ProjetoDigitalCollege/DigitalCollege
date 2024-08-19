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

function Cart() {
  const [count, setCount] = useState(1);
  const valorAtual = 219.00;
  const frete = 20.00; 
  const desconto = 10.00; 

  const [produtos, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.log(`Erro ao buscar produtos: ${error}`);
      }
    };
    fetchData();
  }, []);

  function calcularPorcentagemDesconto(preco, preco_desconto) {
    const desconto = preco - preco_desconto;
    const porcentagemDesconto = (desconto / preco) * 100;
    return parseFloat(porcentagemDesconto.toFixed(2));
  }

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
            {produtos.slice(0, 4).map((produto) => {
              console.log(produto); // Verifique a estrutura de dados aqui
              return (
                <div key={produto.id}>
                  {produto.preco_desconto ? (
                    <Cards2
                      oferta={calcularPorcentagemDesconto(
                        produto.preco,
                        produto.preco_desconto
                      )}
                      foto={produto.imagens?.[0]?.path || "default_image_path"} 
                      titulo={produto.marca}
                      descricao={produto.descricao}
                      valorantigo={produto.preco}
                      valoratual={produto.preco_desconto}
                    />
                  ) : (
                    <Cards
                      foto={produto.imagens?.[0]?.path || "default_image_path"} 
                      titulo={produto.marca}
                      descricao={produto.descricao}
                      valorantigo={produto.preco}
                      valoratual={produto.preco_desconto}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
