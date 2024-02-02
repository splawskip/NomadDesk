import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

type PostCardProps = {
	slug: string,
	title: string,
	excerpt: string,
	publishedOn: string,
	avatar: string,
	author: string,
};

const PostCard = ({slug, title, excerpt, publishedOn, avatar, author} : PostCardProps) => {
	const href = `/post/${slug}`;
	return (
		<article className="p-4 shadow-sm shadow-gray-400 dark:shadow-gray-800 bg-white-50 dark:bg-gray-800 rounded-lg flex flex-col justify-start items-start gap-4 relative outline-none focus-visible:ring ring-blue-500">
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
			<div className='w-full flex gap-2 justify-start items-center text-sm text-gray-500 dark:text-white-300'>
			<Image src={`/${avatar}.webp`} height={40} width={40} alt='avatar' className='rounded-full'></Image>
			<p>{author}</p>
		  	<time dateTime={publishedOn} className="ml-auto">{publishedOn}</time>
			</div>
		</article>
	  );
};

export default PostCard;
