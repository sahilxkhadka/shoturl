"use server";

import { createClient } from "@/utils/supabase/client";

export async function createNewShortUrl(formData: FormData) {
	const supabase = createClient();
	console.log(formData);

	try {
		const { error, data } = await supabase.from("urls").insert([
			{
				custom_id: formData.get("customId"),
				redirect_url: formData.get("redirectUrl"),
			},
		]);
		console.log("🚀 ~ createNewShortUrl ~ error:", error);
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
