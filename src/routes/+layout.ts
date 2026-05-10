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
	const segments = url.pathname.split('/').filter(Boolean);
	const locale = normalizeLocale(segments[0] ?? null);
	const dir = rtlLocales.has(locale) ? 'rtl' : 'ltr';
	const pathWithoutLocale = locales.includes(segments[0] as Locale) ? segments.slice(1) : segments;
	const localizedPath = (targetLocale: Locale) => `/${[targetLocale, ...pathWithoutLocale].join('/')}`;

	if (browser) {
		await loadLocale(locale);
	}

	return {
		locale,
		dir,
		canonicalPath: localizedPath(locale),
		alternateLinks: locales.map((alternateLocale) => ({
			locale: alternateLocale,
			path: localizedPath(alternateLocale)
		}))
	};
};
