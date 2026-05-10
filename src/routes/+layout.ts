import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';
import { locales } from '../locales/data.js';
import '../locales/main.loader.svelte.js';
import '../locales/js.loader.js';

import type { LayoutLoad } from './$types';

export type Locale = (typeof locales)[number];

const defaultLocale: Locale = 'ar';
const rtlLocales = new Set<Locale>(['ar']);

function normalizeLocale(locale: string | null): Locale {
	return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

export const load: LayoutLoad = async ({ url }) => {
	const locale = normalizeLocale(url.searchParams.get('locale'));
	const dir = rtlLocales.has(locale) ? 'rtl' : 'ltr';

	if (browser) {
		await loadLocale(locale);
	}

	return {
		locale,
		dir
	};
};
