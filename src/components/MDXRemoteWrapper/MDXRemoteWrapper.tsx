import { CodeSnippetProps, CommonProps } from '@/types';
import CodeSnippet from '../CodeSnippet';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import FlexPlayground from '../FlexPlayground';

const MDXRemoteWrapper = (props : MDXRemoteProps) => {
	// Gather MDX components styled using Tailwind.
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
			<ul {...props} className="list-disc ml-5 text-base mt-4 text-gray-800 dark:text-white-200">
				{props.children}
			</ul>
		),
		ol: (props: CommonProps) => (
			<ol {...props} className="list-decimal ml-5 text-base mt-4 text-gray-800 dark:text-white-200">
				{props.children}
			</ol>
		),
		pre: (props:CodeSnippetProps) => (
			<CodeSnippet {...props} className="max-w-full">{props.children}</CodeSnippet>
		),
		a: (props: CommonProps) => (
			<a {...props} className="link text-base mt-4 text-blue-500">{props.children}</a>
		),
		li: (props: CommonProps) => (
			<li {...props} className="text-base mt-2 first-of-type:mt-0 text-gray-800 dark:text-white-200">
				{props.children}
			</li>
		),
		FlexPlayground: (props: CommonProps) => (
			<FlexPlayground>
			</FlexPlayground>
		)
	};
	// Build component.
	return (
		<MDXRemote
			{...props}
			components={components}
		></MDXRemote>
	);
};

export default MDXRemoteWrapper;
