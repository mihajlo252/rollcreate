import { supabase } from '../supabase/supabase'

export const getAllData = async (table) => {
  const data = await supabase.from(table).select().order('created_at', { ascending: false })
  return data
}
