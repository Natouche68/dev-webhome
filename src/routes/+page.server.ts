import { redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchQuery = data.get("search");
		throw redirect(303, `https://www.ecosia.org/search?q=${searchQuery}`);
	},
};
