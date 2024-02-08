import { PostFrontmatter } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

const PostCard = ({slug, title, excerpt, publishedOn, authorAvatar, authorName} : PostFrontmatter) => {
	// Build post href.
	const href = `/post/${slug}`;
	// Build component.
	return (
		<article className="card flex justify-start items-stretch">
			<div className="card__body z-10 w-full p-4 shadow-sm shadow-gray-400 dark:shadow-gray-800 bg-white-50 dark:bg-gray-800 rounded-lg flex flex-col justify-start items-start gap-4 relative outline-none focus-visible:ring ring-blue-500">
				<Link href={href} className="text-xl font-semibold text-gray-950 dark:text-white-50">
					{title}
				</Link>
				<p className="text-base text-gray-800 dark:text-white-200">
					{excerpt}
				</p>
				<Link
					href={href}
					className='w-fit flex justify-start items-center gap-4 text-base text-gray-800 dark:text-white-200'
					>
					Continue reading{' '}
					<span><ArrowRight></ArrowRight></span>
				</Link>
				<div className='mt-auto w-full flex gap-2 justify-start items-center text-sm text-gray-500 dark:text-white-300'>
					<Image loading='lazy' src={`/${authorAvatar}-avatar.webp`} height={40} width={40} alt='avatar' className='rounded-full'></Image>
					<p>{authorName}</p>
					<time dateTime={publishedOn} className="ml-auto">{publishedOn}</time>
				</div>
			</div>
		</article>
	  );
};

export default PostCard;
