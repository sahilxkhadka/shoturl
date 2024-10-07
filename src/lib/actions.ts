"use server";

import { redirect } from "next/navigation";

export async function createNewShortUrl(formData: FormData) {
	console.log(formData);

	redirect("/view/123");
}
