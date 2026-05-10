<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	type Locale = 'en' | 'ar';

	let { locale = 'ar' }: { locale?: Locale } = $props();

	const labels: Record<Locale, string> = {
		en: 'EN',
		ar: 'AR'
	};

	const storageKey = 'preferred-locale';

	function switchLocale(nextLocale: Locale) {
		if (nextLocale === locale) return;

		localStorage.setItem(storageKey, nextLocale);

		const url = new URL(page.url);
		const segments = url.pathname.split('/').filter(Boolean);

		if (segments[0] === 'en' || segments[0] === 'ar') {
			segments[0] = nextLocale;
		} else {
			segments.unshift(nextLocale);
		}

		goto(`/${segments.join('/')}${url.search}${url.hash}`, {
			keepFocus: true,
			noScroll: true
		});
	}
</script>

<div
	class="inline-grid grid-cols-2 border border-outline-variant/40 bg-surface-container-low text-[11px] font-headline font-bold uppercase tracking-widest"
	aria-label="Language"
>
	{#each ['en', 'ar'] as option}
		<button
			type="button"
			class={[
				'min-h-[38px] min-w-12 px-3 transition-colors',
				locale === option
					? 'bg-primary text-on-primary'
					: 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
			]}
			aria-pressed={locale === option}
			onclick={() => switchLocale(option as Locale)}
		>
			{labels[option as Locale]}
		</button>
	{/each}
</div>
