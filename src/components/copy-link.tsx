"use client";

import { useState } from "react";

function CopyLinkIcon() {
	return (
		<svg
			fill='currentColor'
			viewBox='0 0 36 36'
			version='1.1'
			preserveAspectRatio='xMidYMid meet'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='size-5'
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
			<g
				id='SVGRepo_tracerCarrier'
				strokeLinecap='round'
				strokeLinejoin='round'
			></g>
			<g id='SVGRepo_iconCarrier'>
				<title>copy-to-clipboard-line</title>
				<path
					d='M22.6,4H21.55a3.89,3.89,0,0,0-7.31,0H13.4A2.41,2.41,0,0,0,11,6.4V10H25V6.4A2.41,2.41,0,0,0,22.6,4ZM23,8H13V6.25A.25.25,0,0,1,13.25,6h2.69l.12-1.11A1.24,1.24,0,0,1,16.61,4a2,2,0,0,1,3.15,1.18l.09.84h2.9a.25.25,0,0,1,.25.25Z'
					className='clr-i-outline clr-i-outline-path-1'
				></path>
				<path
					d='M33.25,18.06H21.33l2.84-2.83a1,1,0,1,0-1.42-1.42L17.5,19.06l5.25,5.25a1,1,0,0,0,.71.29,1,1,0,0,0,.71-1.7l-2.84-2.84H33.25a1,1,0,0,0,0-2Z'
					className='clr-i-outline clr-i-outline-path-2'
				></path>
				<path
					d='M29,16h2V6.68A1.66,1.66,0,0,0,29.35,5H27.08V7H29Z'
					className='clr-i-outline clr-i-outline-path-3'
				></path>
				<path
					d='M29,31H7V7H9V5H6.64A1.66,1.66,0,0,0,5,6.67V31.32A1.66,1.66,0,0,0,6.65,33H29.36A1.66,1.66,0,0,0,31,31.33V22.06H29Z'
					className='clr-i-outline clr-i-outline-path-4'
				></path>
				<rect x='0' y='0' width='36' height='36' fillOpacity='0'></rect>
			</g>
		</svg>
	);
}

const SuccessIcon = () => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='size-5'
	>
		<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
		<g
			id='SVGRepo_tracerCarrier'
			strokeLinecap='round'
			strokeLinejoin='round'
		></g>
		<g id='SVGRepo_iconCarrier'>
			<path
				d='M4.89163 13.2687L9.16582 17.5427L18.7085 8'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
		</g>
	</svg>
);

export default function CopyLink({ url }: { url: string }) {
	const [linkCopied, setLinkCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setLinkCopied(true);

			setTimeout(() => {
				setLinkCopied(false);
			}, 2000);
		} catch (error) {
			console.error(error);
			throw new Error("An unknown error occued");
		}
	};

	return (
		<button
			onClick={handleCopy}
			className='text-violet-500 border border-violet-600 rounded p-1'
			type='button'
		>
			{linkCopied ? <SuccessIcon /> : <CopyLinkIcon />}
		</button>
	);
}
