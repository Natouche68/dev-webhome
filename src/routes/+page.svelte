<script lang="ts">
	import Search from "$lib/icons/Search.svelte";
	import type { SearchEngine } from "$lib/searchEngines";
	import { parseSearch } from "$lib/parseSearch";

	let searchQuery: string = "";
	let searchEngine: SearchEngine | undefined;

	$: {
		searchEngine = parseSearch(searchQuery).searchEngine;
	}
</script>

<div class="home">
	<div class="title">Dev WebHome</div>
	<div class="search-bar">
		{#if searchEngine}
			<svelte:component this={searchEngine.icon} width={2} height={2} />
		{:else}
			<Search width={2} height={2} />
		{/if}
		<form method="POST">
			<input
				type="text"
				autocomplete="off"
				name="search"
				bind:value={searchQuery}
			/>
		</form>
	</div>
</div>

<style>
	.home {
		display: flex;
		height: 80vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 4rem;
		font-weight: 700;
		margin: 3rem;
	}

	.search-bar {
		border: 0.25rem solid #000;
		box-shadow: 0 0 0 #000;
		padding: 0.5rem;
		border-radius: 1rem;
		font-size: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		transition: all 0.4s ease;
	}

	.search-bar:has(input:focus) {
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.5rem 0.5rem 0 #000;
	}

	.search-bar input {
		width: 60vw;
		padding: 0;
		font-size: 2rem;
		border: none;
		outline: none;
	}
</style>
