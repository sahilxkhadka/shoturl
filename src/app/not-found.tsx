import Image from "next/image";

import notFound from "@/assets/not-found.svg";
import Button from "@/components/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className='flex flex-col items-center gap-4'>
			<Image src={notFound} alt='not found image' className='w-96' />
			<div className='font-extrabold text-2xl text-violet-600'>
				Whoooops!{" "}
				<span className='text-neutral-900'>
					The link you are looking for does not exist.
				</span>
			</div>
			<Link href={"/"}>
				<Button type='button' innerText='Trim New URL' className='mx-auto' />
			</Link>
		</div>
	);
}
