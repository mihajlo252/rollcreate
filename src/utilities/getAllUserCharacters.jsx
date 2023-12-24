import { supabase } from '../supabase/supabase'

export const getAllUserCharacters = async (prfileId) => {
  const data = await supabase.from("characters").select().eq("profile", prfileId)
  return data
}
