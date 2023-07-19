export type SearchEngine = {
	name: string;
	shortcut: string;
	url: string;
};

export const defaultSearchEngine = "https://www.ecosia.org/search?q=";

export const searchEngines: SearchEngine[] = [
	{
		name: "Phind",
		shortcut: "!ai",
		url: "https://www.phind.com/agent?q=",
	},
	{
		name: "GitHub",
		shortcut: "!git",
		url: "https://github.com/search?q=",
	},
	{
		name: "YouTube",
		shortcut: "!yt",
		url: "https://www.youtube.com/results?search_query=",
	},
	{
		name: "MDN",
		shortcut: "!mdn",
		url: "https://developer.mozilla.org/en-US/search?q=",
	},
	{
		name: "Codepen",
		shortcut: "!pen",
		url: "https://codepen.io/search/pens?q=",
	},
	{
		name: "dev.to",
		shortcut: "!dev",
		url: "https://dev.to/search?q=",
	},
	{
		name: "Search images",
		shortcut: "!img",
		url: "https://www.ecosia.org/images?q=",
	},
];
