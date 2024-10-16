"use client";

import { checkIdAvailability } from "@/lib/actions";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Spinner from "./icons/spinner";
import Cross from "./icons/cross";
import Tick from "./icons/tick";

type Props = {
	errorMessage: string;
	setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function CustomIdInput({
	errorMessage,
	setErrorMessage,
}: Props) {
	const [customId, setCustomId] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [deabouncedCustomId] = useDebounce(customId, 500);

	const getSearchResult = async () => {
		setIsLoading(true);
		const res = await checkIdAvailability(deabouncedCustomId);
		setIsLoading(false);

		const data = res?.data ?? [];

		if (data.length > 0) {
			setErrorMessage("ID already exists");
		} else {
			setErrorMessage(res?.error?.message ?? "");
		}
	};

	const displayIndicatior = () => {
		console.log("here");
		if (isLoading) {
			return <Spinner />;
		}
		if (errorMessage) {
			return (
				<span title={errorMessage}>
					<Cross />
				</span>
			);
		}
		if (deabouncedCustomId !== "") {
			return <Tick />;
		}
		return null;
	};

	useEffect(() => {
		if (deabouncedCustomId !== "") {
			getSearchResult();
		}
	}, [deabouncedCustomId]);

	return (
		<div className='relative flex bg-transparent ring-0 outline-none border-none  border-neutral-500 text-neutral-900 placeholder-violet-700 placeholder:font-semibold text-sm rounded-lg placeholder-opacity-60 w-full p-2.5 checked:bg-emerald-500'>
			<div className='flex-1'>
				<input
					type='text'
					className='outline-none block border-none'
					placeholder='xylp9z7'
					name='id'
					value={customId}
					onChange={(e) => {
						setCustomId(e.target.value);
					}}
				/>
			</div>
			{displayIndicatior()}
		</div>
	);
}
