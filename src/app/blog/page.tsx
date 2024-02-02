import { getBlogPosts } from "@/utils";
import PostCard from "@/components/PostCard";

export const metadata = {
	title: 'NomadDesk -> Blog',
	description: 'NomadDesk -> Blog',
};

const Blog = async () => {
	const posts = await getBlogPosts();
	return (
		<main className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 bg-white-100 dark:bg-gray-900">
			      {posts.map(({
		slug, title, excerpt, publishedOn, author, avatar
	  }) => (
			<PostCard key={slug} avatar={avatar} author={author} slug={slug} title={title} excerpt={excerpt} publishedOn={publishedOn}></PostCard>
	  	)
	  )}
		</main>
	);
};

export default Blog;
