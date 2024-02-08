import { supabase } from '../supabase/supabase'

export const getAllUserTables = async (table, profileId) => {
  const data = await supabase.from(table).select().eq("profile", profileId)
  return data
}
