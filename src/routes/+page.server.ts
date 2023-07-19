import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";
import { parseSearch } from "$lib/parseSearch";
import { defaultSearchEngine } from "$lib/searchEngines";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchInputValue = data.get("search") as string;

		const { searchQuery, searchEngine } = parseSearch(searchInputValue);

		if (!searchEngine) {
			throw redirect(303, defaultSearchEngine + searchQuery);
		}

		throw redirect(303, searchEngine.url + searchQuery);
	},
} satisfies Actions;
