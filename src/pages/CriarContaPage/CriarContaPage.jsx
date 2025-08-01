import HeaderMenor from "../../Components/HeaderMenor/HeaderMenor";
import Footer from "../../Components/Footer/Footer";
import "../../Components/Main/MainCriarConta.css";
import gmail from "../../assets/img/gmail.svg";
import facebook from "../../assets/img/facebook.svg";
import sapatos from "../../assets/img/dois_tenis_nike.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

function Criar() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validações
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      const userData = {
        nome: formData.nome,
        email: formData.email,
        cpf: formData.cpf
      };

      const { error } = await signUp(formData.email, formData.password, userData);
      
      if (error) {
        setError(error.message);
      } else {
        navigate('/'); // Redireciona para a home após cadastro
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      setError('Erro interno. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderMenor />
      <main>
        <div className="formulario">
          <div className="title">
            <h1>Crie sua conta</h1>
            <p>
              Já possui uma conta? Entre <Link to="/Login">aqui</Link>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="conta">
            <h4>Nome Completo *</h4>
            <input 
              type="text" 
              name="nome"
              placeholder="Insira seu nome completo" 
              value={formData.nome}
              onChange={handleChange}
              required
            />
            
            <h4>CPF *</h4>
            <input 
              type="text" 
              name="cpf"
              placeholder="000.000.000-00" 
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            
            <h4>Email *</h4>
            <input 
              type="email" 
              name="email"
              placeholder="Insira seu email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <h4>Senha *</h4>
            <input 
              type="password" 
              name="password"
              placeholder="Insira sua senha" 
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <h4>Confirmar Senha *</h4>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirme sua senha" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            
            {error && <div className="error-message">{error}</div>}
            
            <button 
              type="submit" 
              className="btn-resumoa"
              disabled={loading}
            >
              {loading ? 'Criando...' : 'Criar Conta'}
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
      <Footer />
    </>
  );
}

export default Criar;
