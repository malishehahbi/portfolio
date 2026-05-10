<script lang="ts">
	import { page } from '$app/state';

	const homeHref = $derived(`/${page.data.locale ?? 'ar'}`);
</script>

<svelte:head>
	<title>404</title>
</svelte:head>

<main class="min-h-screen bg-surface text-on-surface px-4">
	<section class="flex flex-col items-center justify-center gap-6 text-center">
		<h1 class="font-headline text-7xl font-bold tracking-tighter">404</h1>
		<a
			class="technical-label text-on-surface-variant hover:text-primary transition-colors"
			href={homeHref}
		>
			Back to home
		</a>
	</section>
</main>
