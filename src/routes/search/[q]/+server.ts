import { redirect, type RequestHandler } from "@sveltejs/kit";
import { parseSearch } from "$lib/parseSearch";
import { defaultSearchEngine } from "$lib/searchEngines";

export const GET = (async ({ params }) => {
	const searchInputValue = params.q || "";

	const { searchQuery, searchEngine } = parseSearch(searchInputValue);

	if (!searchEngine) {
		throw redirect(303, defaultSearchEngine + searchQuery);
	}

	throw redirect(303, searchEngine.url + searchQuery);
}) satisfies RequestHandler;
