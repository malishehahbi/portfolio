<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import LanguageToggle from '$lib/LanguageToggle.svelte';
	import '../app.css';

	let { children, data } = $props();

	$effect(() => {
		document.documentElement.lang = data.locale;
		document.documentElement.dir = data.dir;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={data.canonicalPath} />
	{#each data.alternateLinks as alternate}
		<link rel="alternate" hreflang={alternate.locale} href={alternate.path} />
	{/each}
	<link rel="alternate" hreflang="x-default" href="/ar" />
</svelte:head>

<div class="fixed bottom-4 right-4 z-[60] md:bottom-6 md:right-6">
	<LanguageToggle locale={data.locale} />
</div>

{@render children()}
