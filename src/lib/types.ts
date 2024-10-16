export type TUrlDetailsPayload = {
	id?: string;
	redirect_url: string;
};

export type TFormState = {
	errors: {
		redirectUrl?: string;
		id?: string;
	};
	message?: string;
};
