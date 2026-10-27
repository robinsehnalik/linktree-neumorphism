// Site configuration helpers and defaults
import { getEntry } from 'astro:content';

export async function getSite() {
	try {
		const entry = await getEntry('site', 'site');
		if (entry?.data) {
			return {
				title: entry.data.title,
				description: entry.data.description,
				author: entry.data.author ?? 'Alex Vance',
			};
		}
	} catch (e) {
		// Fallback
	}

	return {
		title: 'Alex Vance — Links & Creator Hub',
		description: 'Explore official links, latest releases, digital products, and 1-on-1 sessions with Alex Vance.',
		author: 'Alex Vance',
	};
}
