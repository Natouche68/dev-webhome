import Bot from "$lib/icons/Bot.svelte";
import Github from "$lib/icons/Github.svelte";
import Youtube from "$lib/icons/Youtube.svelte";
import Code from "$lib/icons/Code.svelte";
import Codepen from "$lib/icons/Codepen.svelte";
import DevTo from "$lib/icons/DevTo.svelte";
import Image from "$lib/icons/Image.svelte";

export type SearchEngine = {
	name: string;
	shortcut: string;
	url: string;
	icon?: any;
	color?: string;
};

export const defaultSearchEngine = "https://www.ecosia.org/search?q=";

export const searchEngines: SearchEngine[] = [
	{
		name: "Phind",
		shortcut: "!ai",
		url: "https://www.phind.com/agent?q=",
		icon: Bot,
		color: "#3739e5",
	},
	{
		name: "GitHub",
		shortcut: "!git",
		url: "https://github.com/search?q=",
		icon: Github,
		color: "#00b0d3",
	},
	{
		name: "YouTube",
		shortcut: "!yt",
		url: "https://www.youtube.com/results?search_query=",
		icon: Youtube,
		color: "#fe0001",
	},
	{
		name: "MDN",
		shortcut: "!mdn",
		url: "https://developer.mozilla.org/en-US/search?q=",
		icon: Code,
		color: "#872bff",
	},
	{
		name: "Codepen",
		shortcut: "!pen",
		url: "https://codepen.io/search/pens?q=",
		icon: Codepen,
		color: "#ffbf1e",
	},
	{
		name: "dev.to",
		shortcut: "!dev",
		url: "https://dev.to/search?q=",
		icon: DevTo,
		color: "#00e554",
	},
	{
		name: "Search images",
		shortcut: "!img",
		url: "https://www.ecosia.org/images?q=",
		icon: Image,
		color: "#07820e",
	},
];
