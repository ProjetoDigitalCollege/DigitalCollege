import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./ProductViewPage.css";
import Cards2 from "../../Components/Cards/Cards2";
import Cards from "../../Components/Cards/Cards";
import Carrousel from "../../Components/CarouselMenor/CarouselMenor";
import sapatoAzul from "../../assets/img/sapato_card.png";
import { useState, useEffect } from "react"
import axios from "axios"

function ProductView() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products")
        setCharacter(response.data)
        console.log("API response:", response.data);
        setLoading(false)
        console.log(`deu certo`)
      } catch (error) {
        console.log(`o erro foi ${error}`)
        setLoading(false)
      }
    }
    fetchData();
  }, [])

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
            <button className="botaoCompraProductView">Comprar</button>
          </div>
        </div>
      </div>

      <section className="produtos_relacionados">
        <h5>Produtos relacionados</h5>
        <div className="produto-em-alta-cards">
          {Array.isArray(character) && character.slice(0, 4).map(card => (
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
      </section>

      <Footer />
    </>
  );
}

export default ProductView;
