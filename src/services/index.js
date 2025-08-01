import { mockAPI } from './mockAPI.js';
import * as supabaseAPI from './api.js';

const USE_MOCK_DATA = false;

export const {
  getProdutos,
  getProdutoBySlug,
  getProdutosByCategoria,
  getCategorias,
  getUsuarioById,
  getVendasByUsuario,
  searchProdutos,
  createVenda,
  createPedido,
  createUsuario,
  updateUsuario,
  createEndereco,
  linkUsuarioEndereco,
  createTelefone,
  linkUsuarioTelefone
} = USE_MOCK_DATA ? mockAPI : supabaseAPI;

export const mockAuth = {
  user: null,
  loading: false,
  
  signIn: async (email, password) => {
    if (email === 'teste@email.com' && password === '123456') {
      const user = {
        id: '1',
        email: 'teste@email.com',
        user_metadata: {
          nome: 'Usuário Teste'
        }
      };
      mockAuth.user = user;
      return { data: { user }, error: null };
    }
    return { data: null, error: { message: 'Email ou senha incorretos' } };
  },

  signUp: async (email, password, userData) => {
    const user = {
      id: Math.random().toString(36).substring(7),
      email,
      user_metadata: userData
    };
    mockAuth.user = user;
    return { data: { user }, error: null };
  },

  signOut: async () => {
    mockAuth.user = null;
    return { error: null };
  },

  getUserProfile: async (userId) => {
    return {
      data: {
        id: userId,
        nome: 'Usuário Teste',
        email: 'teste@email.com',
        cpf: '123.456.789-00'
      },
      error: null
    };
  }
};

export { USE_MOCK_DATA };
