import { locales } from '../locales/data.js';

import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => locales.includes(param as (typeof locales)[number]);
