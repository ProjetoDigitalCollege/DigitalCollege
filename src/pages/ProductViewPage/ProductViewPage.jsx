import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./ProductViewPage.css";
import Cards2 from "../../Components/Cards/Cards2";
import Cards from "../../Components/Cards/Cards";
import Carrousel from "../../Components/CarouselMenor/CarouselMenor";
import sapatoAzul from "../../assets/img/sapato_card.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductView() {
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
      <div className="corpo-product-view">
        <p>
          Home / Produtos / Tênis / Nike / Tenis Nike Revolution 6 Nature
          Masculino
        </p>
        <div className="product">
          <div className="carousel-cards-tenis">
            <div>
              <Carrousel />
            </div>

            <div className="galery">
              <div className="galery1">
                <img src={sapatoAzul} alt="" />
              </div>
              <div className="galery2">
                <img src={sapatoAzul} alt="" />
              </div>
              <div className="galery3">
                <img src={sapatoAzul} alt="" />
              </div>
              <div className="galery4">
                <img src={sapatoAzul} alt="" />
              </div>
              <div className="galery5">
                <img src={sapatoAzul} alt="" />
              </div>
            </div>
          </div>
          <div className="buyBox">
            <h3>Tenis Nike Revolution 6 Nature Masculino</h3>
            <p className="referencia-do-produto">
              Casual | Nike | REF:38416711
            </p>
            <p>
              R$ <span id="preco">219,90</span> <span id="riscado">219,00</span>
            </p>
            <h6>Descrição do produto</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              vitae quod labore dolorum ea! Alias fugiat nulla temporibus,
              tempore debitis nostrum expedita corporis corrupti magnam cum
              distinctio reprehenderit adipisci recusandae?
            </p>
            <div className="corTamanho">
              <h6>Tamanho</h6>
              <div className="escolherTamanhos">
                <button className="numeracoesDosProdutos">39</button>
                <button className="numeracoesDosProdutos">40</button>
                <button className="numeracoesDosProdutos">41</button>
                <button className="numeracoesDosProdutos">42</button>
                <button className="numeracoesDosProdutos">43</button>
              </div>
              <h6>cor</h6>
              <div className="escolher-cor">
                <div className="coresDosProdutos">
                  <button className="button-selecionar-cor button-cor-1"></button>
                </div>
                <div className="coresDosProdutos">
                  <button className="button-selecionar-cor button-cor-2"></button>
                </div>
                <div className="coresDosProdutos">
                  <button className="button-selecionar-cor button-cor-3"></button>
                </div>
                <div className="coresDosProdutos">
                  <button className="button-selecionar-cor button-cor-4"></button>
                </div>
              </div>
            </div>
            <div className="button-link-home botaoCompraProductView">
              <Link to="/Cart">Comprar</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="produtos_relacionados">
        <h5>Produtos relacionados</h5>
        <div className="produto-em-alta-cards">
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
      </section>

      <Footer />
    </>
  );
}

export default ProductView;
