import { supabase } from "../supabase/supabase";

export async function submitCampaign(metaData) {
  const { data, error } = await supabase
    .from('campaigns')
    .insert([
      {}
    ])
    .select()
            
  return {data: data, error: error}
}
