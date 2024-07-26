import { supabase } from "../supabase/supabase";

export async function submitCampaign(profileId, campaignName, mapFile, descriptionFile) {
	const { data: dbData, error: dbError } = await supabase
		.from("campaigns")
		.insert([{profile: profileId,  meta_data: { map: mapFile.name, description: descriptionFile.name }, campaign_name: campaignName }])
		.select();
	const { data: mapStorageData, error: mapStorageError } = await supabase.storage.from("maps").upload(mapFile.name, mapFile);
	const { data: descriptionStorageData, error: descriptionStorageError } = await supabase.storage.from("descriptions").upload(descriptionFile.name, descriptionFile);


	return { dbData, dbError, mapStorageData, mapStorageError, descriptionStorageData, descriptionStorageError };
}
