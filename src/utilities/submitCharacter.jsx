import { supabase } from "../supabase/supabase";

export async function submitCharacter(metaData, profileId, campaignId) {
  const { data, error } = await supabase
    .from('characters')
    .insert([
      {meta_data: metaData, profile: profileId, campaign: campaignId}
    ])
    .select()
            
  return {data: data, error: error}
}
