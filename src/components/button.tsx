import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
	innerText: string;
};

export default function Button({
	className,
	innerText,
	children,
	...props
}: Props) {
	return (
		<button
			className={`group/button disabled:cursor-not-allowed disabled:bg-violet-500/80 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-violet-500 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out  hover:shadow-md  hover:shadow-violet-500/50 border border-white/20 disabled:shadow-none ${className}`}
			{...props}
		>
			{children}
			<span className='text-lg'>{innerText}</span>
			<div className='absolute group-disabled/button:hidden inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]'>
				<div className='relative h-full w-10 bg-white/30'></div>
			</div>
		</button>
	);
}
