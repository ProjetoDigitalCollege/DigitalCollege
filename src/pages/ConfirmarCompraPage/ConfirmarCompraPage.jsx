import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InputForms from "../../Components/InputForms/InputForms";
import ResumoCompra2 from "../../Components/ResumoCompra/ResumoCompra2";
import "./ConfirmarCompraPage.css";
import { Link } from "react-router-dom";

function ConfirmarCompra() {
  const frete = 20.0; // trocar por dinamico
  const desconto = 10.0; // trocar por dinamico
  return (
    <>
      <Header />
      <section className="section-confirmar-compra">
        <div className="aling-forms">
          <div className="section-criar-forms section-tirar-padding">
            <h1 className="titulo-input-forms">Finalizar Conta</h1>
            <div className="infomacoes-pessoais">
              <h4>Infomacoes Pessoais</h4>
              <hr />
              <InputForms
                titulo={"nome"}
                nome={"Nome completo*"}
                type={"text"}
                descricao={"Insira seu nome"}
                required
              />
              <InputForms
                titulo={"cpf"}
                nome={"CPF*"}
                type={"text"}
                descricao={"Insira seu CPF"}
                required
              />
              <InputForms
                titulo={"emails"}
                nome={"E-mail*"}
                type={"email"}
                descricao={"Insira seu email"}
                required
              />
              <InputForms
                titulo={"celular"}
                nome={"Celular*"}
                type={"text"}
                descricao={"Insira seu celular"}
                required
              />
            </div>
            <div className="infomacoes-entrega">
              <h4>Infomacoes de Entrega</h4>
              <hr />
              <InputForms
                titulo={"endereco"}
                nome={"Endereco*"}
                type={"text"}
                descricao={"Insira seu endereco"}
                required
              />
              <InputForms
                titulo={"bairro"}
                nome={"Bairro*"}
                type={"text"}
                descricao={"Insira seu bairro"}
                required
              />
              <InputForms
                titulo={"cidade"}
                nome={"Cidade*"}
                type={"text"}
                descricao={"Insira seu cidade"}
                required
              />
              <InputForms
                titulo={"cep"}
                nome={"CEP*"}
                type={"text"}
                descricao={"Insira seu CEP"}
                required
              />
              <InputForms
                titulo={"complemento"}
                nome={"Complemento"}
                type={"text"}
                descricao={"Insira seu complemento"}
                required
              />
            </div>
            <div className="infomacoes-entrega infomacoes-pagamento">
              <h4>Infomacoes de Pagamento</h4>
              <hr />
              <div className="form-radio">
              <h6>Forma de pagamento</h6>
                <div className="topico-estado align-direction">
                  <div className="inputs-filtrar-por">
                    <input
                      id="check-mark3"
                      className="input-filtrar-por radio"
                      type="radio"
                      name="check-mark3"
                      checked
                    />
                    <label className="label-filtrar-por" htmlFor="check-mark3">
                      Cartão de Crédito
                    </label>
                  </div>
                  <div className="inputs-filtrar-por">
                    <input
                      id="check-mark4"
                      className="input-filtrar-por radio"
                      type="radio"
                      name="check-mark4"
                    />
                    <label className="label-filtrar-por" htmlFor="check-mark4">
                      Boleto Bancário
                    </label>
                  </div>
                </div>
              </div>
              <InputForms
                className="nome-cartao"
                titulo={"nomeCartao"}
                nome={"Nome do Cartão*"}
                type={"text"}
                descricao={"Insira o nome do Cartão"}
                required
              />
              <div className="info-cartao-container">
                <div className="info-cartao-group">
                  <InputForms
                    className="numero-cartao"
                    titulo={"numeroCartao"}
                    nome={"Número do Cartão*"}
                    type={"text"}
                    descricao={"Insira o número do Cartão"}
                    maxlength="19"
                    pattern="\d{4} \d{4} \d{4} \d{4}"
                    required
                  />
                </div>
                <div className="info-cartao-group">
                  <InputForms
                    className="data-cartao"
                    titulo={"validade"}
                    nome={"Data de validade do Cartão*"}
                    type={"month"}
                    descricao={"Insira a validade do Cartão"}
                    required
                  />
                </div>
                <div className="info-cartao-group">
                  <InputForms
                    className="cvv-cartao"
                    titulo={"cvv"}
                    nome={"CVV*"}
                    type={"text"}
                    descricao={"Insira seu complemento"}
                    maxlength="3"
                    required
                  />
                </div>
                <div className="info-cartao-group"></div>
              </div>
            </div>
            <div className="infomacoes-entrega cart-suceso">
              <h6>Finalizar Compra</h6>
              <hr />
              <div className="resumo-valor resumo-valor2">
                <h2>
                  Total: <span>R$ {Number({ frete }).toFixed(2)}</span>
                </h2>
                <h5>
                  ou 10x de R$ {Number({ desconto }).toFixed(2)} sem juros
                </h5>
              </div>
              <div className="btn-resumo2 btn-resumo-maior ">
                <Link to="/Sucesso">Realizar Pagamento</Link>
              </div>
            </div>
          </div>
          <div className="align-resumo-compra">
            <ResumoCompra2
              frete={frete}
              desconto={desconto}
              multiploAtual={0}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ConfirmarCompra;
