import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { USE_MOCK_DATA, mockAuth } from '../services/index'

const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (USE_MOCK_DATA) {
      // Para dados mocados, simula um usuário logado
      setUser(mockAuth.user)
      setLoading(false)
      return
    }

    // Código original do Supabase
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email, password) => {
    if (USE_MOCK_DATA) {
      const result = await mockAuth.signIn(email, password)
      if (result.data?.user) {
        setUser(result.data.user)
      }
      return result
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signUp = async (email, password, userData = {}) => {
    if (USE_MOCK_DATA) {
      const result = await mockAuth.signUp(email, password, userData)
      if (result.data?.user) {
        setUser(result.data.user)
      }
      return result
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    
    if (data.user && !error) {
      await createUserProfile(data.user.id, userData)
    }
    
    return { data, error }
  }

  const signOut = async () => {
    if (USE_MOCK_DATA) {
      const result = await mockAuth.signOut()
      setUser(null)
      return result
    }

    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const createUserProfile = async (userId, userData) => {
    if (USE_MOCK_DATA) {
      return { error: null }
    }

    const { error } = await supabase
      .from('usuarios')
      .insert([
        {
          id: userId,
          nome: userData.nome || '',
          email: userData.email || '',
          cpf: userData.cpf || '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
    
    if (error) {
      console.error('Erro ao criar perfil do usuário:', error)
    }
  }

  const getUserProfile = async (userId) => {
    if (USE_MOCK_DATA) {
      return mockAuth.getUserProfile(userId)
    }

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('id', userId)
      .single()
    
    return { data, error }
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    getUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
