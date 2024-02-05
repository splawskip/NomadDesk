import { PostFrontmatter } from '@/types';
import clsx, { ClassValue } from 'clsx';
import Image from 'next/image';

type PostHeaderProps = {
	postDetails: PostFrontmatter,
	className?: ClassValue,
};

const PostHeader = ({ postDetails, className, ...delegated } : PostHeaderProps) => {
	const {title, publishedOn, authorAvatar, authorName} = postDetails;
	// Build component.
  return (
    <header
      className={clsx('relative flex flex-col justify-end items-center w-full container mx-auto border-b-2 border-gray-500 pb-8', className)}
      {...delegated}
    >
      <div className='relative w-full container flex flex-col gap-6'>
        <h2 className='text-4xl font-semibold text-gray-950 dark:text-white-50'>{title}</h2>
		<div className='w-full flex flex-col gap-2 justify-start items-start sm:flex-row sm:items-center text-sm text-gray-500 dark:text-white-300'>
			<Image loading='lazy' src={`/${authorAvatar}-avatar.webp`} height={40} width={40} alt='avatar' className='rounded-full'></Image>
			<p>{authorName}</p>
			<time dateTime={publishedOn} className="sm:ml-auto">Published on{' '}{publishedOn}</time>
		</div>
      </div>
    </header>
  );
};

export default PostHeader;
