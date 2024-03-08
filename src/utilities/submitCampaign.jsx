import { supabase } from "../supabase/supabase";

export async function submitCampaign(profileId, campaignName, mapFile) {
	const { data: dbData, error: dbError } = await supabase
		.from("campaigns")
		.insert([{profile: profileId,  meta_data: { map: mapFile.name }, campaign_name: campaignName }])
		.select();
	const { data: storageData, error: storageError } = await supabase.storage.from("maps").upload(mapFile.name, mapFile);

	return { dbData, dbError, storageData, storageError };
}
