import { supabase } from '../supabase/supabase'


export const GetAllCampaigns = async () => {
  const campaigns = await supabase.from('campaigns').select()
  return campaigns
}
