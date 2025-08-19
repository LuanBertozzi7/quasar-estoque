// gonna receive all auth logic here
/* eslint-disable no-unused-vars */

import { ref, resolveDirective } from 'vue'
import useSupabase from 'src/boot/supabase'

const user = ref(null)

export default function useAuthUser () {

  const { supabase } = useSupabase()

  const login = async ({ email, password }) => {
    const {user, error} = await supabase.auth.signIn({email, password})
    if (error) throw error
    return user
  }

  const loginWithSocialProvider = async (provider) => {
    const {user, error} = await supabase.auth.signIn({provider})
    if (error) throw error
    return user
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if(error) throw error
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        data: meta,
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
      }
    )
    if (error) throw error
    return user
  }


  const update = async (data) => {
    const {user, error} = await supabase.auth.update(data)
    if(error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const {user, error} = await supabase.auth.api.resetPasswordForEMail(email)
    if(error) throw error
    return user
  }

  return {
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail
  }
}

