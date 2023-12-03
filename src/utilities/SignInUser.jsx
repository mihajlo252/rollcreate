import { supabase } from "../supabase/supabase";

export async function signInUser(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  return data
}
