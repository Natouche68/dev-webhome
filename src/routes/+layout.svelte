<script lang="ts">
	const images = [
		"https://images.unsplash.com/photo-1689784730988-6cafd0821f8b?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1689427108433-577ef250ede7?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1689020562921-ba28a34c881d?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1689363302902-2c58330d6494?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1466024760775-91c6530fc877?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1689438905977-cdafd7c3314e?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1688870564744-0e8a78c1997d?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1471922694854-ff1b63b20054?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1464925257126-6450e871c667?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1490750967868-88aa4486c946?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1689101298178-4db5b7a8c49f?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1635936957646-58ee765a5e46?fit=crop&w=2056",
		"https://images.unsplash.com/photo-1684696964290-b7184e3fcd1b?fit=crop&w=2056",
	];

	const backgroundImage = images[Math.floor(Math.random() * images.length)];
</script>

<svelte:head>
	<title>Dev WebHome</title>
	<link rel="shortcut icon" href="favicon.png" />
</svelte:head>

<slot />

<div class="bg-img" style:background-image="url({`"${backgroundImage}"`})" />

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

	.bg-img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-size: cover;
		opacity: 0.8;
	}
</style>
