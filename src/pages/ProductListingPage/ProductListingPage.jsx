// import "./HomePage.css"
import "./ProductListingPage.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Cards from "../../Components/Cards/Cards"
import Cards2 from "../../Components/Cards/Cards2"
import sapatoAzul from "../../assets/img/sapato_card.png"
import setaParaBaixo from "../../assets/img/seta_para_baixo.png"
import { useState, useEffect } from "react"
import axios from "axios"

function ProductList() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products")
        setCharacter(response.data)
        console.log("API response:", response.data);
        console.log(`deu certo`)
      } catch (error) {
        console.log(`o erro foi ${error}`)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Header />
      <section className="section-product-list">
        <div className="topico-product-list">
          <h1>Resultado para Tênis - <span>389 produtos</span></h1> {/*props*/}
          <div className="dropdown-ordernar-por">
            <h1>Ordenar por: <span>mais relevantes</span></h1>
            <i><img src={setaParaBaixo} alt="seta para baixo" /></i>
          </div>
        </div>
        <div className="corpo-product-list">
          <div className="checkbox-filtrar-por">
            <div className="checkbox-filtrar-por-center">
              <h1>Filtrar por</h1>
              <hr className="barra-filtrar-por" />
              <div className="topico-marka">
                <h1>Marka</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="adiddas" type="checkbox" name="check-mark1" />
                  <label className="label-filtrar-por" htmlFor="adiddas">Adiddas</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="calenclaga" type="checkbox" name="check-mark2" />
                  <label className="label-filtrar-por" htmlFor="calenclaga">Calenclaga</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="k-swiss" type="checkbox" name="check-mark3" />
                  <label className="label-filtrar-por" htmlFor="k-swiss">k-Swiss</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="nike" type="checkbox" name="check-mark4" />
                  <label className="label-filtrar-por" htmlFor="nike">Nike</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="puma" type="checkbox" name="check-mark5" />
                  <label className="label-filtrar-por" htmlFor="puma">Puma</label>{/*props*/}
                </div>
              </div>
              <div className="topico-categoria">
                <h1>Categoria</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="esporte" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="esporte">Esporte e lazer</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="casual" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="casual">Casual</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="utilitario" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="utilitario">Utilitário</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="check-mark" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Corrida</label>{/*props*/}
                </div>
              </div>
              <div className="topico-genero">
                <h1>Gênero</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="masculino" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="masculino">Masculino</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="feminino" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="feminino">Feminino</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" id="unisex" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="unisex">Unisex</label>{/*props*/}
                </div>
              </div>
              <div className="topico-estado">
                <h1>Estado</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por radio" id="novo" type="radio" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="novo">Novo</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por radio" id="usado" type="radio" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="usado">Usado</label>{/*props*/}
                </div>
              </div>
            </div>
          </div>
          <div className="card-product-list">
            <div className="produto-em-alta-cards">
              {Array.isArray(character) && character.slice(5, 20).map(card => (
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
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProductList
