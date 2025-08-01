import { supabase } from '../lib/supabase'

export const getProdutos = async (limit = 20, offset = 0) => {
  const { data, error } = await supabase
    .from('produtos')
    .select(`
      *,
      categorias:produtos_categoria(
        categoria:categorias(*)
      ),
      imagens:produtos_imagem(
        imagem:imagens(*)
      ),
      opcoes:produtos_opcoes(*)
    `)
    .eq('ativo', true)
    .range(offset, offset + limit - 1)
  
  return { data, error }
}

export const getProdutoBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('produtos')
    .select(`
      *,
      categorias:produtos_categoria(
        categoria:categorias(*)
      ),
      imagens:produtos_imagem(
        imagem:imagens(*)
      ),
      opcoes:produtos_opcoes(*)
    `)
    .eq('slug', slug)
    .eq('ativo', true)
    .single()
  
  return { data, error }
}

export const getProdutosByCategoria = async (categoriaId) => {
  const { data, error } = await supabase
    .from('produtos')
    .select(`
      *,
      categorias:produtos_categoria!inner(
        categoria:categorias!inner(*)
      ),
      imagens:produtos_imagem(
        imagem:imagens(*)
      )
    `)
    .eq('categorias.categoria.id', categoriaId)
    .eq('ativo', true)
  
  return { data, error }
}

export const getCategorias = async () => {
  const { data, error } = await supabase
    .from('categorias')
    .select('*')
    .eq('usa_no_menu', true)
  
  return { data, error }
}

export const createUsuario = async (userData) => {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([userData])
    .select()
  
  return { data, error }
}

export const getUsuarioById = async (id) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select(`
      *,
      enderecos:usuarios_endereco(
        endereco:enderecos(*)
      ),
      telefones:telefones_usuario(
        telefone:telefones(*)
      )
    `)
    .eq('id', id)
    .single()
  
  return { data, error }
}

export const updateUsuario = async (id, userData) => {
  const { data, error } = await supabase
    .from('usuarios')
    .update({
      ...userData,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
  
  return { data, error }
}

export const createEndereco = async (enderecoData) => {
  const { data, error } = await supabase
    .from('enderecos')
    .insert([enderecoData])
    .select()
  
  return { data, error }
}

export const linkUsuarioEndereco = async (usuarioId, enderecoId, nome = '') => {
  const { data, error } = await supabase
    .from('usuarios_endereco')
    .insert([{
      usuario_id: usuarioId,
      endereco_id: enderecoId,
      nome: nome
    }])
  
  return { data, error }
}

export const createTelefone = async (telefoneData) => {
  const { data, error } = await supabase
    .from('telefones')
    .insert([telefoneData])
    .select()
  
  return { data, error }
}

export const linkUsuarioTelefone = async (usuarioId, telefoneId) => {
  const { data, error } = await supabase
    .from('telefones_usuario')
    .insert([{
      usuario_id: usuarioId,
      telefone_id: telefoneId
    }])
  
  return { data, error }
}

export const createVenda = async (vendaData) => {
  const { data, error } = await supabase
    .from('vendas')
    .insert([vendaData])
    .select()
  
  return { data, error }
}

export const getVendasByUsuario = async (usuarioId) => {
  const { data, error } = await supabase
    .from('vendas')
    .select(`
      *,
      pedidos:pedidos(
        produto:produtos(*)
      )
    `)
    .eq('usuario_id', usuarioId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const createPedido = async (pedidoData) => {
  const { data, error } = await supabase
    .from('pedidos')
    .insert(pedidoData)
    .select()
  
  return { data, error }
}

export const searchProdutos = async (termo) => {
  const { data, error } = await supabase
    .from('produtos')
    .select(`
      *,
      imagens:produtos_imagem(
        imagem:imagens(*)
      )
    `)
    .or(`descricao.ilike.%${termo}%, marca.ilike.%${termo}%`)
    .eq('ativo', true)
  
  return { data, error }
}
