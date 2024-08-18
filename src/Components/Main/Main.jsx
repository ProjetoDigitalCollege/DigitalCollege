import "../Main/Main.css";
import { Link } from "react-router-dom";
import gmail from "../../assets/img/gmail.svg";
import facebook from "../../assets/img/facebook.svg";
import sapatos from "../../assets/img/dois_tenis_nike.png";
import transformarRequisicao from "../../utils/tranformarRequisicao";
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target); 
    const data = Object.fromEntries(formData.entries());
    try {
      await transformarRequisicao("user/login", "POST", data);
      navigate('/ConfirmarCompra');
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <>
      <main>
        <div className="formulario card-formulario">
          <div className="title">
            <h1>Acesse sua conta</h1>
            <p>
              Novo cliente? Então registre-se <Link to="/Registrar">aqui</Link>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="conta">
            <h4>Login *</h4>
            <input type="text" name="email" placeholder="Insira seu login ou email" />
            <h4>Senha *</h4>
            <input type="password" name="password" placeholder="Insira sua senha" />
            <Link to="/Error">Esqueci minha senha</Link>
            <button type="submit" className="btn-resumoa">Acessar Conta</button>
          </form>
          <div className="outrologin">
            <p>Ou faça login com</p>
            <div className="img">
              <Link to="https://www.google.com/intl/pt-BR/gmail/about/">
                <img src={gmail} alt="gmail" />
              </Link>
              <Link to="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </Link>
            </div>
          </div>
        </div>
        <div className="fotoSapatos">
          <img src={sapatos} />
        </div>
      </main>
    </>
  );
}

export default Main;
