/* eslint-disable no-unused-vars */

import { ref, resolveDirective } from 'vue'
import useSupabase from 'src/boot/supabase'

// reative variable (reload page when changed)
const user = ref(null)

export default function useAuthUser() {
  const { supabase } = useSupabase()

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return user
  } /* ####### supabase.auth.signIn is deprecated ############*/

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signInWithPassword({ provider })
    if (error) throw error
    return user
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  // !! it's a trick for transform in boolean value(true/false)
  const isLoggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        user: meta,
        emailRedirectTo: `${window.location.origin}/Me?fromEmail=registrationConfirmation`,
      },
    })
    if (error) throw error
    return user
  }

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEMail(email)
    if (error) throw error
    return user
  }

  return {
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
    user,
  }
}
