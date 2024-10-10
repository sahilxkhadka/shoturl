export const debounce = <T extends (...args: never[]) => void>(
	func: T,
	delay: number
) => {
	let timeoutId: NodeJS.Timeout | null = null;
	return (...args: Parameters<T>): void => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
};
