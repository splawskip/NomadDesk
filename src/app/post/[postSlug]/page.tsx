import React from 'react';

import { loadBlogPost } from '@/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/components/CodeSnippet';
import { CodeSnippetProps, CommonProps } from '@/types';
import { BrightProps } from 'bright';

type BlogPostProps = {
	params: {postSlug: string},
	searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params } : BlogPostProps) {
	const {frontmatter} = await loadBlogPost(params.postSlug);

	return {
	  title: `${frontmatter.title} - Post`,
	  description: frontmatter.excerpt,
	};
  }

async function BlogPost({params} : BlogPostProps) {
	const {content, frontmatter} = await loadBlogPost(params.postSlug);
	const components = {
		h1: (props: CommonProps) => (
			<h1 {...props} className='text-3xl mt-4 font-semibold text-gray-950 dark:text-white-50'>
				{props.children}
			</h1>
		),
		h2: (props: CommonProps) => (
			<h2 {...props} className='text-2xl mt-4 font-semibold text-gray-950 dark:text-white-50'>
				{props.children}
			</h2>
		),
		h3: (props: CommonProps) => (
			<h3 {...props} className='text-xl mt-4 font-semibold text-gray-950 dark:text-white-50'>
				{props.children}
			</h3>
		),
		h4: (props: CommonProps) => (
			<h4 {...props} className='text-lg mt-4 font-semibold text-gray-950 dark:text-white-50'>
				{props.children}
			</h4>
		),
		h5: (props: CommonProps) => (
			<h5 {...props} className='text-base mt-4 font-semibold text-gray-950 dark:text-white-50'>
				{props.children}
			</h5>
		),
		h6: (props: CommonProps) => (
			<h6 {...props} className='text-sm mt-4 font-semibold text-gray-950 dark:text-white-50'>
				{props.children}
			</h6>
		),
		p: (props: CommonProps) => (
			<p {...props} className="text-base mt-4 text-gray-800 dark:text-white-200">
				{props.children}
			</p>
		),
		ul: (props: CommonProps) => (
			<ul {...props} className="text-base mt-4 text-gray-800 dark:text-white-200">
				{props.children}
			</ul>
		),
		ol: (props: CommonProps) => (
			<ol {...props} className="text-base mt-4 text-gray-800 dark:text-white-200">
				{props.children}
			</ol>
		),
		pre: (props:CodeSnippetProps) => (
			<CodeSnippet {...props} className="max-w-full">{props.children}</CodeSnippet>
		),
	};
  return (
    <article className='w-full flex flex-col justify-start items-start p-6 container mx-auto'>
		<MDXRemote
			source={content}
			components={components}
		></MDXRemote>
    </article>
  );
}

export default BlogPost;
