import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import { PostFrontmatter } from './types';

export function excerptify(text: string = '', maxLength: number = 120): string {
	const excerpt = text.replace(/(<([^>]+)>)/ig, '');
	if (excerpt.length > maxLength) {
	  return excerpt.substring(0, maxLength) + '\u2026';
	}
	// If the text is within the limit, return it as is.
	return excerpt;
};

export function range(start: number, end?: number, step: number = 1): number[] {
	let output: number[] = [];
	if (typeof end === 'undefined') {
	  end = start;
	  start = 0;
	}
	for (let i = start; i < end; i += step) {
	  output.push(i);
	}
	return output;
};

async function readFile(localPath: string): Promise<string> {
	return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

async function readDirectory(localPath: string): Promise<string[]> {
	return fs.readdir(path.join(process.cwd(), localPath));
}

export const getBlogPosts = cache(async (): Promise<PostFrontmatter[]> => {
	const fileNames = await readDirectory('/posts');
	const blogPosts: PostFrontmatter[] = [];

	for (let fileName of fileNames) {
		const rawContent = await readFile(`/posts/${fileName}`);
		const { data: frontmatter } = matter(rawContent);

		blogPosts.push({
			slug: fileName.replace('.mdx', ''),
			...(frontmatter as PostFrontmatter),
		});
	}

	return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
});

export async function loadBlogPost(slug: string): Promise<{ frontmatter: PostFrontmatter; content: string }> {
	try {
		const rawContent = await readFile(`/posts/${slug}.mdx`);
		const { data, content } = matter(rawContent);
		const frontmatter = data as PostFrontmatter;
		return { frontmatter, content };
	} catch (error) {
		notFound();
	}
}
