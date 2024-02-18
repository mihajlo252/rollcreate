import { supabase } from "../supabase/supabase";

export async function submitCharacter(metaData, profileId, campaignId) {
  const { data, error } = await supabase
    .from('characters')
    .insert([
      {meta_data: metaData, profile: "d9d5da45-16f6-43a0-b18b-14b60dbdf508", campaign: campaignId}
    ])
    .select()
            
  return {data: data, error: error}
}
