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

export async function checkIdAvailability(id: string) {
	const supabase = createClient();

	try {
		const { data, error } = await supabase
			.from("urls")
			.select("custom_id")
			.eq("custom_id", id);
		console.log("🚀 ~ checkIdAvailability ~ data", data);
		console.log("🚀 ~ checkIdAvailability ~ error", error);

		return { data, error };
	} catch (error) {
		console.error(error);
	}
}
