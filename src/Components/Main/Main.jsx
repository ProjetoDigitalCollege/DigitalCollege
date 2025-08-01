import "../Main/Main.css";
import { Link } from "react-router-dom";
import gmail from "../../assets/img/gmail.svg";
import facebook from "../../assets/img/facebook.svg";
import sapatos from "../../assets/img/dois_tenis_nike.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

function Main() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(event.target); 
    const data = Object.fromEntries(formData.entries());
    
    try {
      const { error } = await signIn(data.email, data.password);
      
      if (error) {
        setError('Email ou senha incorretos');
      } else {
        navigate('/'); // Redireciona para a home após login
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro interno. Tente novamente.');
    } finally {
      setLoading(false);
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
            <input 
              type="email" 
              name="email" 
              placeholder="Insira seu email" 
              required
            />
            <h4>Senha *</h4>
            <input 
              type="password" 
              name="password" 
              placeholder="Insira sua senha" 
              required
            />
            <Link to="/Error">Esqueci minha senha</Link>
            
            {error && <div className="error-message">{error}</div>}
            
            <button 
              type="submit" 
              className="btn-resumoa"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Acessar Conta'}
            </button>
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
