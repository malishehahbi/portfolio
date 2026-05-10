<svelte:head>
	<title>Mohamad Ali</title>
	<link rel="canonical" href="/ar/" />
	<script>
		{
			const supportedLocales = new Set(['en', 'ar']);
			const savedLocale = localStorage.getItem('preferred-locale');
			const browserLocale = navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en';
			const locale = supportedLocales.has(savedLocale) ? savedLocale : browserLocale;
			document.documentElement.lang = locale;
			document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
			location.replace(`/${locale}/`);
		}
	</script>
	<noscript>
		<meta http-equiv="refresh" content="0; url=/ar/" />
	</noscript>
</svelte:head>

<main class="min-h-screen bg-surface text-on-surface px-4">
	<section class="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
		<h1 class="font-headline text-4xl font-bold tracking-tighter">Mohamad Ali</h1>
		<a
			class="technical-label text-on-surface-variant hover:text-primary transition-colors"
			href="/ar/"
		>
			Enter
		</a>
	</section>
</main>
