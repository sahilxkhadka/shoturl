"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function CustomIdInput() {
	const [customId, setCustomId] = useState("");

	const [deabouncedCustomId] = useDebounce(customId, 5000);
	console.log(deabouncedCustomId);

	const getSearchResult = async () => {};

	useEffect(() => {
		getSearchResult();
	}, [deabouncedCustomId]);

	return (
		<input
			type='text'
			className='relative bg-transparent ring-0 outline-none border-none  border-neutral-500 text-neutral-900 placeholder-violet-700 placeholder:font-semibold text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500'
			placeholder='xylp9z7'
			name='customId'
			value={customId}
			onChange={(e) => {
				setCustomId(e.target.value);
			}}
		/>
	);
}
