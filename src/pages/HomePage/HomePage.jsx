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
import { getProdutos } from "../../services";

function Home() {
  const [produtos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getProdutos(8, 0);
        if (error) {
          console.error('Erro ao buscar produtos:', error);
        } else {
          setProducts(data || []);
        }
      } catch (error) {
        console.error(`Erro ao buscar produtos: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function calcularPorcentagemDesconto(preco, preco_desconto) {
    if (!preco_desconto) return 0;
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
            {loading ? (
              <div className="loading">Carregando produtos...</div>
            ) : produtos.length > 0 ? (
              produtos.slice(0, 8).map((produto) => {
                return (
                  <div key={produto.id}>
                    {produto.preco_desconto ? (
                      <Cards2
                        oferta={calcularPorcentagemDesconto(
                          produto.preco,
                          produto.preco_desconto
                        )}
                        foto={produto.imagens?.[0]?.path || "/src/assets/img/sapato_card.png"} 
                        titulo={produto.marca}
                        descricao={produto.descricao}
                        valorantigo={produto.preco}
                        valoratual={produto.preco_desconto}
                      />
                    ) : (
                      <Cards
                        foto={produto.imagens?.[0]?.path || "/src/assets/img/sapato_card.png"} 
                        titulo={produto.marca}
                        descricao={produto.descricao}
                        valorantigo={produto.preco}
                        valoratual={produto.preco}
                      />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="no-products">Nenhum produto encontrado</div>
            )}
          </div>
        </div>
      </section>
      <Destaque />
      <Footer />
    </>
  );
}

export default Home;
