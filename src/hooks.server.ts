import { locales } from './locales/data.js';
import { key as jsKey, loadCatalog as loadJsCatalog, loadIDs as jsLoadIDs } from './locales/js.loader.server.js';
import {
	key as mainKey,
	loadCatalog as loadMainCatalog,
	loadIDs as mainLoadIDs
} from './locales/main.loader.server.svelte.js';
import { loadLocales, runWithLocale } from 'wuchale/load-utils/server';

import type { Handle } from '@sveltejs/kit';

type Locale = (typeof locales)[number];

const defaultLocale: Locale = 'ar';
const rtlLocales = new Set<Locale>(['ar']);

await Promise.all([
	loadLocales(mainKey, mainLoadIDs, loadMainCatalog, locales),
	loadLocales(jsKey, jsLoadIDs, loadJsCatalog, locales)
]);

function normalizeLocale(locale: string | null): Locale {
	return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

export const handle: Handle = async ({ event, resolve }) => {
	const locale = normalizeLocale(event.url.pathname.split('/').filter(Boolean)[0] ?? null);
	const dir = rtlLocales.has(locale) ? 'rtl' : 'ltr';

	return runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale).replace('%dir%', dir)
		})
	);
};
