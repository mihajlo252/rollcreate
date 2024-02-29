import { supabase } from "../supabase/supabase";

export async function deleteData(table, id) {
	const { error } = await supabase
		.from(table)
		.delete()
		.eq("id", id);

	return error;
}
