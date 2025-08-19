import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lqvzcujstvambnfehmgc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxdnpjdWpzdHZhbWJuZmVobWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NjMwMzYsImV4cCI6MjA3MTEzOTAzNn0.SMgFmnnaEps7EISdvTyDmIPd2LgBRVhw0CTp9pO7oOg'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase);

export default function useSupabase () {
  return { supabase }
}

