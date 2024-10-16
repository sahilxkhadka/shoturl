"use server";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { TUrlDetailsPayload } from "./types";

export async function createNewShortUrl(
	prevState: string | undefined,
	formData: FormData
) {
	const supabase = createClient();

	const payload: TUrlDetailsPayload = {
		redirect_url: formData.get("redirectUrl")?.toString() ?? "",
	};

	if (formData.get("id")) {
		payload.id = formData.get("id")?.toString() ?? "";
	}

	const { data, error } = await supabase
		.from("urls")
		.insert([payload])
		.select();
	console.log(error);
	if (error) {
		return error.details;
	}
	redirect(`/view/${data[0].id}`);
}

export async function checkIdAvailability(id: string) {
	const supabase = createClient();

	try {
		const { data, error } = await supabase
			.from("urls")
			.select("id")
			.eq("id", id);

		return { data, error };
	} catch (error) {
		console.error(error);
	}
}
