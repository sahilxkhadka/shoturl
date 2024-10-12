"use server";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { TUrlDetailsPayload } from "./types";

export async function createNewShortUrl(formData: FormData) {
	const supabase = createClient();

	const payload: TUrlDetailsPayload = {
		redirect_url: formData.get("redirectUrl")?.toString() ?? "",
	};

	if (formData.get("customId")) {
		payload.custom_id = formData.get("customId")?.toString() ?? "";
	}

	const { data, error } = await supabase
		.from("urls")
		.insert([payload])
		.select();

	if (error) {
		throw new Error("Konichiwa");
	}
	redirect(`/view/${data[0].custom_id}`);
}

export async function checkIdAvailability(id: string) {
	const supabase = createClient();

	try {
		const { data, error } = await supabase
			.from("urls")
			.select("custom_id")
			.eq("custom_id", id);

		return { data, error };
	} catch (error) {
		console.error(error);
	}
}
