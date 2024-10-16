"use client";

import CustomIdInput from "@/components/custom-id-input";
import SubmitButton from "@/components/submit-btn";
import { createNewShortUrl } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function Home() {
	const [formErrorMessage, setFormErrorMessage] = useState("");
	const [errorMessage, formAction] = useFormState(createNewShortUrl, undefined);

	useEffect(() => {
		if (errorMessage) {
			setFormErrorMessage(errorMessage);
		}
	});
	return (
		<main className=''>
			<form
				className='text-neutral-800 py-6 space-y-6 relative overflow-hidden flex flex-col justify-around border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6'
				action={formAction}
			>
				<div className='before:absolute before:w-32 before:h-20 before:right-2 space-y-1.5 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6'>
					<span className='font-extrabold text-2xl text-violet-600'>
						Choto Mitho URL...
					</span>
					<p className='text-neutral-700 text-sm'>
						Let&apos;s get your long link trimmed ✂️✂️✂️
					</p>
				</div>
				<div className=''>
					<label
						htmlFor='currentUrl'
						className='text-sm font-medium mb-3 block'
					>
						Enter your current URL *
					</label>
					<div className="relative w-full rounded-lg min-w-96 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
						<input
							type='url'
							className='relative bg-transparent ring-0 outline-none border  border-neutral-500 text-neutral-900 placeholder-violet-700 placeholder:font-semibold text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500'
							placeholder='www.verylongurl.com'
							name='redirectUrl'
							pattern='https://.*'
							size={30}
							required
						/>
					</div>
				</div>
				<div className=''>
					<label
						htmlFor='currentUrl'
						className='text-sm font-medium mb-3 block'
					>
						Customize 🚀
					</label>
					<div className="relative w-full flex border border-neutral-500 rounded-lg min-w-96 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-200 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
						<div className='text-sm px-2.5 text-white bg-gradient-to-r flex justify-center items-center from-violet-400 via-purple-500 to-violet-700 '>
							<span>shotturl.vercel.app/</span>
						</div>
						<CustomIdInput
							errorMessage={formErrorMessage}
							setErrorMessage={setFormErrorMessage}
						/>
					</div>
					{formErrorMessage && (
						<span className='mt-3 block text-red-400 font-medium'>
							{formErrorMessage}
						</span>
					)}
				</div>
				<SubmitButton disabled={formErrorMessage !== ""} />
			</form>
		</main>
	);
}
