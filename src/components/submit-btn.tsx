"use client";

import { useFormStatus } from "react-dom";
import Button from "./button";
import Spinner from "./icons/spinner";

export default function SubmitButton({ disabled }: { disabled?: boolean }) {
	const { pending } = useFormStatus();
	return (
		<Button innerText='Trim URL' disabled={pending || disabled}>
			{pending && (
				<span className='*:fill-white mr-2'>
					<Spinner />
				</span>
			)}
		</Button>
	);
}
