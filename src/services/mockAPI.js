// Dados mocados para simular a API
export const mockData = {
  categorias: [
    { id: 1, nome: 'Tênis', usa_no_menu: true },
    { id: 2, nome: 'Camisetas', usa_no_menu: true },
    { id: 3, nome: 'Calças', usa_no_menu: true },
    { id: 4, nome: 'Headphones', usa_no_menu: true },
    { id: 5, nome: 'Bonés', usa_no_menu: false },
  ],

  produtos: [
    {
      id: 1,
      slug: 'tenis-nike-air-max',
      descricao: 'Tênis Nike Air Max confortável para o dia a dia. Perfeito para corridas e caminhadas, com tecnologia de amortecimento avançada.',
      preco: 299.99,
      preco_desconto: 249.99,
      marca: 'Nike',
      estoque: 50,
      ativo: true,
      usado_no_menu: true,
      categorias: [{ id: 1, nome: 'Tênis' }],
      imagens: [
        { id: 1, path: '/src/assets/img/tenis.png', ativo: true },
        { id: 2, path: '/src/assets/img/tenis-nike-view.svg', ativo: true }
      ],
      opcoes: [
        {
          id: 1,
          titulo: 'Tamanho',
          type: 'select',
          values: ['38', '39', '40', '41', '42', '43', '44']
        },
        {
          id: 2,
          titulo: 'Cor',
          type: 'color',
          values: ['#000000', '#FFFFFF', '#FF0000', '#0000FF']
        }
      ]
    },
    {
      id: 2,
      slug: 'camiseta-adidas-basic',
      descricao: 'Camiseta Adidas básica de algodão premium. Confortável e versátil para usar no dia a dia.',
      preco: 79.99,
      preco_desconto: null,
      marca: 'Adidas',
      estoque: 100,
      ativo: true,
      usado_no_menu: true,
      categorias: [{ id: 2, nome: 'Camisetas' }],
      imagens: [
        { id: 3, path: '/src/assets/img/blusa.png', ativo: true }
      ],
      opcoes: [
        {
          id: 3,
          titulo: 'Tamanho',
          type: 'select',
          values: ['PP', 'P', 'M', 'G', 'GG', 'XG']
        },
        {
          id: 4,
          titulo: 'Cor',
          type: 'color',
          values: ['#000000', '#FFFFFF', '#808080']
        }
      ]
    },
    {
      id: 3,
      slug: 'calca-jeans-levis',
      descricao: 'Calça jeans Levis modelo clássico. Tecido resistente e modelagem perfeita.',
      preco: 189.99,
      preco_desconto: 159.99,
      marca: 'Levis',
      estoque: 30,
      ativo: true,
      usado_no_menu: true,
      categorias: [{ id: 3, nome: 'Calças' }],
      imagens: [
        { id: 4, path: '/src/assets/img/calca_destaque.svg', ativo: true }
      ],
      opcoes: [
        {
          id: 5,
          titulo: 'Tamanho',
          type: 'select',
          values: ['36', '38', '40', '42', '44', '46']
        },
        {
          id: 6,
          titulo: 'Cor',
          type: 'color',
          values: ['#000080', '#000000', '#800080']
        }
      ]
    },
    {
      id: 4,
      slug: 'headphone-beats',
      descricao: 'Headphone Beats com cancelamento de ruído ativo. Som de alta qualidade para profissionais.',
      preco: 899.99,
      preco_desconto: 799.99,
      marca: 'Beats',
      estoque: 20,
      ativo: true,
      usado_no_menu: true,
      categorias: [{ id: 4, nome: 'Headphones' }],
      imagens: [
        { id: 5, path: '/src/assets/img/fone de ouvido.png', ativo: true }
      ],
      opcoes: [
        {
          id: 7,
          titulo: 'Cor',
          type: 'color',
          values: ['#000000', '#FF0000', '#FFFFFF']
        }
      ]
    },
    {
      id: 5,
      slug: 'bone-nike-dri-fit',
      descricao: 'Boné Nike Dri-FIT com tecnologia de absorção do suor.',
      preco: 89.99,
      preco_desconto: 69.99,
      marca: 'Nike',
      estoque: 75,
      ativo: true,
      usado_no_menu: false,
      categorias: [{ id: 5, nome: 'Bonés' }],
      imagens: [
        { id: 6, path: '/src/assets/img/bone_destaque.svg', ativo: true }
      ],
      opcoes: [
        {
          id: 8,
          titulo: 'Tamanho',
          type: 'select',
          values: ['Único']
        }
      ]
    }
  ],

  usuarios: [
    {
      id: '1',
      nome: 'João Silva',
      email: 'joao@email.com',
      cpf: '123.456.789-00',
      created_at: '2024-01-15T10:30:00Z'
    }
  ],

  vendas: [
    {
      id: 1,
      usuario_id: '1',
      valor_total: 449.98,
      created_at: '2024-08-01T14:30:00Z',
      pedidos: [
        {
          id: 1,
          produto_id: 1,
          quantidade: 1,
          preco_unitario: 249.99,
          produto: {
            id: 1,
            slug: 'tenis-nike-air-max',
            descricao: 'Tênis Nike Air Max',
            marca: 'Nike'
          }
        },
        {
          id: 2,
          produto_id: 3,
          quantidade: 1,
          preco_unitario: 159.99,
          produto: {
            id: 3,
            slug: 'calca-jeans-levis',
            descricao: 'Calça jeans Levis',
            marca: 'Levis'
          }
        }
      ]
    }
  ]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAPI = {
  getProdutos: async (limit = 20, offset = 0) => {
    await delay(500);
    const produtos = mockData.produtos.slice(offset, offset + limit);
    return { data: produtos, error: null };
  },

  getProdutoBySlug: async (slug) => {
    await delay(300);
    const produto = mockData.produtos.find(p => p.slug === slug);
    return { data: produto || null, error: produto ? null : { message: 'Produto não encontrado' } };
  },

  getProdutosByCategoria: async (categoriaId) => {
    await delay(400);
    const produtos = mockData.produtos.filter(p => 
      p.categorias.some(c => c.id === categoriaId)
    );
    return { data: produtos, error: null };
  },

  getCategorias: async () => {
    await delay(200);
    const categorias = mockData.categorias.filter(c => c.usa_no_menu);
    return { data: categorias, error: null };
  },

  getUsuarioById: async (id) => {
    await delay(300);
    const usuario = mockData.usuarios.find(u => u.id === id);
    return { data: usuario || null, error: usuario ? null : { message: 'Usuário não encontrado' } };
  },

  getVendasByUsuario: async (usuarioId) => {
    await delay(400);
    const vendas = mockData.vendas.filter(v => v.usuario_id === usuarioId);
    return { data: vendas, error: null };
  },

  searchProdutos: async (termo) => {
    await delay(600);
    const produtos = mockData.produtos.filter(p => 
      p.descricao.toLowerCase().includes(termo.toLowerCase()) ||
      p.marca.toLowerCase().includes(termo.toLowerCase())
    );
    return { data: produtos, error: null };
  },

  createVenda: async (vendaData) => {
    await delay(800);
    const novaVenda = {
      id: mockData.vendas.length + 1,
      ...vendaData,
      created_at: new Date().toISOString()
    };
    mockData.vendas.push(novaVenda);
    return { data: novaVenda, error: null };
  },

  createPedido: async (pedidoData) => {
    await delay(300);
    return { data: pedidoData, error: null };
  }
};
