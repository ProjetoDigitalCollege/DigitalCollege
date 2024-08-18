import HeaderMenor from "../../Components/HeaderMenor/HeaderMenor";
import Footer from "../../Components/Footer/Footer";
import InputForms from "../../Components/InputForms/InputForms";
import "./CriarFormularioPage.css";
import transformarRequisicao from "../../utils/tranformarRequisicao";
import { useNavigate } from 'react-router-dom';

function CriarFormulario() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      await transformarRequisicao("user/register", "POST", data);
      navigate('/Login');
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <>
      <HeaderMenor />
      <section className="section-criar-forms">
        <form onSubmit={handleSubmit}>
          <h1 className="titulo-input-forms">Criar Conta</h1>
          <div className="infomacoes-pessoais">
            <h4>Infomacoes Pessoais</h4>
            <hr />
            <InputForms
              titulo={"nome"}
              nome={"Nome completo*"}
              type={"text"}
              descricao={"Insira seu nome"}
            />
            <InputForms
              titulo={"senha"}
              nome={"Senha*"}
              type={"password"}
              descricao={"Insira sua senha"}
            />
            <InputForms
              titulo={"cpf"}
              nome={"CPF*"}
              type={"text"}
              descricao={"Insira seu CPF"}
            />
            <InputForms
              titulo={"email"}
              nome={"E-mail*"}
              type={"email"}
              descricao={"Insira seu email"}
            />
            <InputForms
              titulo={"celular"}
              nome={"Celular*"}
              type={"text"}
              descricao={"Insira seu celular"}
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
            />
            <InputForms
              titulo={"bairro"}
              nome={"Bairro*"}
              type={"text"}
              descricao={"Insira seu bairro"}
            />
            <InputForms
              titulo={"cidade"}
              nome={"Cidade*"}
              type={"text"}
              descricao={"Insira seu cidade"}
            />
            <InputForms
              titulo={"cep"}
              nome={"CEP*"}
              type={"text"}
              descricao={"Insira seu CEP"}
            />
            <InputForms
              titulo={"complemento"}
              nome={"Complemento"}
              type={"text"}
              descricao={"Insira seu complemento"}
            />
          </div>
          <div className="criar-conta-forms">
            <div className="input-ofertas-forms">
              <input className="check-input-forms" type="checkbox" />
              <label>
                Quero receber por email ofertas e novidades das lojas da Digital
                Store. A frequência de envios pode variar de acordo com a
                interação do cliente.
              </label>
            </div>
            <button>Criar Conta</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default CriarFormulario;
