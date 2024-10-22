import Button from "@/components/button";
import CopyLink from "@/components/copy-link";
import GithubIcon from "@/components/icons/github-icon";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import logo from "@/assets/shoturl.png";

export default async function ViewUrlInfoPage({
	params: { id },
}: {
	params: { id: string };
}) {
	const pathname = `${process.env.SITE_URL}/${id}`;

	const supabase = createClient();

	const { data } = await supabase
		.from("urls")
		.select("*")
		.eq("id", id)
		.single();

	if (!data) {
		notFound();
	}

	return (
		<div className='card'>
			<div className='relative bg-white w-96 sm:w-[432px] lg:w-[572px] group transition-all duration-700 aspect-video flex items-center justify-center'>
				<div className='transition-all flex px-8 lg:px-14 flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-28 before:absolute before:w-9 before:h-9 before:top-14 before:right-9 space-y-3.5 before:bg-rose-600 before:-z-10 before:rounded-full before:blur-xl  after:absolute after:w-12 after:h-12 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:top-2 after:right-3'>
					<span className='font-extrabold text-2xl text-violet-600'>
						Your Short URL 🩳
					</span>
					<div className='bg-violet-200 flex items-center gap-5 px-3.5 py-2 mx-8 w-full rounded-lg border-dashed border border-violet-600'>
						<Link
							href={pathname}
							className='text-neutral-900 text-sm font-medium hover:underline hover:text-violet-600 line-clamp-2 text-ellipsis flex-1'
							target='_blank'
						>
							{pathname}
						</Link>
						<CopyLink url={pathname} />
					</div>
					<Link href={"/"}>
						<Button type='button' innerText='Trim New URL' />
					</Link>

					<Link
						href={""}
						className='bg-violet-300 p-2 rounded-sm border-white shadow-md shadow-violet-500'
					>
						<GithubIcon />
					</Link>
				</div>
				<div className='seal bg-rose-500 text-red-800 w-24 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-violet-600'>
					<Image src={logo} className='size-full rounded-full' alt='logo' />
				</div>
				<div className='tp transition-all duration-1000 group-hover:duration-100 bg-violet-400 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]'></div>
				<div className='lft transition-all duration-700 absolute w-full h-full bg-violet-600 [clip-path:polygon(50%_50%,_0_0,_0_100%)]'></div>
				<div className='rgt transition-all duration-700 absolute w-full h-full bg-violet-700 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]'></div>
				<div className='btm transition-all duration-700 absolute w-full h-full bg-violet-800 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]'></div>
			</div>
		</div>
	);
}
