import { supabase } from "../supabase/supabase";

export async function signUpNewUser(email, password, username) {
	const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password,
		options: {
			data: {
				username: username,
			},
		},
	});
	console.log(data, error);
}
