<script lang="ts">
	import Search from "$lib/icons/Search.svelte";
	import { parseSearch } from "$lib/parseSearch";

	let searchQuery: string = "";

	$: searchEngine = parseSearch(searchQuery).searchEngine;
</script>

<div class="home" style="--color:{searchEngine?.color || '#000'}">
	<div class="title">Dev WebHome</div>
	<div class="search-bar">
		<svelte:component
			this={searchEngine?.icon || Search}
			width={2}
			height={2}
			color={searchEngine?.color || "#000"}
		/>
		<form method="POST">
			<!-- svelte-ignore a11y-autofocus -->
			<input
				type="text"
				autocomplete="off"
				name="search"
				autofocus
				bind:value={searchQuery}
			/>
		</form>
	</div>
	<a
		class="help"
		href="https://github.com/Natouche68/dev-webhome#search-engines"
	>
		Need help ?
	</a>
</div>

<style>
	.home {
		display: flex;
		height: 96vh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		text-align: center;
		font-size: 4rem;
		font-weight: 700;
		margin: 3rem;
		color: var(--color);
		transition: color 0.4s ease;
	}

	.search-bar {
		background: #fff;
		border: 0.25rem solid #000;
		box-shadow: 0 0 0 var(--color);
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
		box-shadow: 0.5rem 0.5rem 0 var(--color);
	}

	.search-bar input {
		width: 60vw;
		padding: 0;
		font-size: 2rem;
		border: none;
		outline: none;
	}

	.help {
		margin-top: 12rem;
		font-size: 1.2rem;
		color: #d7d7d7;
		text-decoration: none;
	}
</style>
