import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const profile = defineCollection({
	loader: glob({ base: './src/content/profile', pattern: '**/*.yml' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			handle: z.string(),
			avatar: image(),
			badge: z.string().optional(),
			verified: z.boolean().default(true),
			tagline: z.string(),
			bio: z.string(),
			location: z.string().optional(),
			metrics: z.array(
				z.object({
					label: z.string(),
					value: z.string(),
				})
			).default([]),
			socials: z.array(
				z.object({
					platform: z.string(),
					label: z.string(),
					url: z.string(),
					icon: z.string(),
				})
			).default([]),
		}),
});

const links = defineCollection({
	loader: glob({ base: './src/content/links', pattern: '**/*.yml' }),
	schema: z.object({
		items: z.array(
			z.object({
				id: z.string(),
				title: z.string(),
				subtitle: z.string().optional(),
				url: z.string(),
				icon: z.string().optional(),
				tag: z.string().optional(),
				featured: z.boolean().default(false),
				category: z.string().default('General'),
				copyable: z.boolean().default(false),
			})
		),
	}),
});

const site = defineCollection({
	loader: file('src/site-config.yml'),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string().optional(),
	}),
});

export const collections = { profile, links, site };
