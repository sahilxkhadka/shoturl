"use client";

import Image from "next/image";

import error from "@/assets/error.svg";
import Button from "@/components/button";
import Link from "next/link";

export default function Error() {
	return (
		<div className='flex flex-col items-center gap-4'>
			<Image src={error} alt='not found image' className='w-96' />
			<div className='font-extrabold text-2xl text-violet-600'>
				OooopsiePie!{" "}
				<span className='text-neutral-900'>An unknown error occured.</span>
			</div>
			<Link href={"/"}>
				<Button type='button' innerText='Trim New URL' className='mx-auto' />
			</Link>
		</div>
	);
}
