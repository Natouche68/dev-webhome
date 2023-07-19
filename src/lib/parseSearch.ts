import type { SearchEngine } from "./searchEngines";
import { searchEngines } from "./searchEngines";

export function parseSearch(searchQuery: string): {
	searchQuery: string;
	searchEngine?: SearchEngine;
} {
	let response: {
		searchQuery: string;
		searchEngine?: SearchEngine;
	} = {
		searchQuery,
	};

	searchEngines.forEach((searchEngine) => {
		if (searchQuery.startsWith(searchEngine.shortcut)) {
			const newSearchQuery = searchQuery.split(" ");
			newSearchQuery.shift();

			response = {
				searchQuery: newSearchQuery.join(" "),
				searchEngine: searchEngine,
			};
		}
	});

	return response;
}
