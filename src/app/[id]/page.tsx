import { createClient } from "@/utils/supabase/server";
import { notFound, redirect } from "next/navigation";

export default async function Home({
	params: { id },
}: {
	params: { id: string };
}) {
	const supabase = createClient();

	const { data } = await supabase
		.from("urls")
		.select("*")
		.eq("id", id)
		.single();

	if (data?.redirect_url) {
		redirect(data.redirect_url);
	} else {
		notFound();
	}
}
