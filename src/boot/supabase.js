import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/useAuthUser'
import { ref } from 'vue'

export const user = ref(null)

// supabase authenticator
const supabaseUrl = 'https://lqvzcujstvambnfehmgc.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxdnpjdWpzdHZhbWJuZmVobWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NjMwMzYsImV4cCI6MjA3MTEzOTAzNn0.SMgFmnnaEps7EISdvTyDmIPd2LgBRVhw0CTp9pO7oOg'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()
  user.value = session?.user || null
  showUserStatus();
})

function showUserStatus(event) {
  if(user.value) {
    console.info(`event: ${event} | info: `, user.value.session);
  } else {
    console.warn(`No users logged in yet`);
  };
}

export default function useSupabase() {
  return { supabase, showUserStatus }
}
