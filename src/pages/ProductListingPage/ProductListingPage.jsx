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
      <section className="section-product-list">
        <div className="topico-product-list">
          <h1>Resultado para "Tênis" - <span>389 produtos</span></h1> {/*props*/}
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
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark1" />
                  <label className="label-filtrar-por" htmlFor="check-mark1">Adiddas</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark2" />
                  <label className="label-filtrar-por" htmlFor="check-mark2">Calenclaga</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark3" />
                  <label className="label-filtrar-por" htmlFor="check-mark3">k-Swiss</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark4" />
                  <label className="label-filtrar-por" htmlFor="check-mark4">Nike</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark5" />
                  <label className="label-filtrar-por" htmlFor="check-mark5">Puma</label>{/*props*/}
                </div>
              </div>
              <div className="topico-categoria">
                <h1>Categoria</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Esporte e lazer</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Casual</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Utilitário</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Corrida</label>{/*props*/}
                </div>
              </div>
              <div className="topico-genero">
                <h1>Gênero</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Masculino</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Feminino</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por check" type="checkbox" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Unisex</label>{/*props*/}
                </div>
              </div>
              <div className="topico-estado">
                <h1>Estado</h1>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por radio" type="radio" name="check-mark" checked />
                  <label className="label-filtrar-por" htmlFor="check-mark">Novo</label>{/*props*/}
                </div>
                <div className="inputs-filtrar-por">
                  <input className="input-filtrar-por radio" type="radio" name="check-mark" />
                  <label className="label-filtrar-por" htmlFor="check-mark">Usado</label>{/*props*/}
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
