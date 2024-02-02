import React from 'react';

import { loadBlogPost } from '@/utils';
import MDXRemoteWrapper from '@/components/MDXRemoteWrapper';

type BlogPostProps = {
	params: {slug: string},
	searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params } : BlogPostProps) {
	const {frontmatter} = await loadBlogPost(params.slug);

	return {
	  title: `${frontmatter.title} - Post`,
	  description: frontmatter.excerpt,
	};
}

async function BlogPost({params} : BlogPostProps) {
	const {content, frontmatter} = await loadBlogPost(params.slug);
  // Build components.
  return (
    <article className='w-full flex flex-col justify-start items-start p-6 container mx-auto'>
		<MDXRemoteWrapper source={content}></MDXRemoteWrapper>
    </article>
  );
}

export default BlogPost;
