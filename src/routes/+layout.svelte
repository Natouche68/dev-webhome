<svelte:head>
	<title>Dev WebHome</title>
	<link rel="shortcut icon" href="favicon.png" />
</svelte:head>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: "Rubik", sans-serif;
		font-size: 16px;
		min-height: 100vh;
	}

	:global(input) {
		font-family: "Rubik", sans-serif;
	}
</style>
