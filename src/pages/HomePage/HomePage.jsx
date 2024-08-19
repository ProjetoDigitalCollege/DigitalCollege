import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Cards/Cards";
import Cards2 from "../../Components/Cards/Cards2";
import IconDestaque from "../../Components/IconDestaque/IconDestaque";
import flechaRosa from "../../assets/img/flecha_icon.svg";
import CardDestaque from "../../Components/CardDestaque/CardDestaque";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Destaque } from "../../Components/Destaque/Destaque";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
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

  return (
    <>
      <Header />
      <Carousel />
      <CardDestaque />
      <IconDestaque />
      <section className="container-produtos-em-alta">
        <div className="produtos-em-alta">
          <div className="topico-section">
            <h1>Produtos em alta</h1>
            <h2>
              <Link to="/ProductList" className="link-ver-todos">
                Ver todos <img src={flechaRosa} alt="flecha" />
              </Link>
            </h2>
          </div>
          <div className="produto-em-alta-cards">
            {produtos.slice(0, 10).map((produto) => {
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
      <Destaque />
      <Footer />
    </>
  );
}

export default Home;
