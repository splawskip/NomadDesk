import Link from "next/link";

const Nav = () => {
	// Build component.
	return (
		<nav className="flex justify-end items-center">
			<ul className="flex justify-between items-center gap-4">
				<li className="text-secondary hover:text-yellow-400"><Link prefetch={true} href="/">Job offers</Link></li>
				<li className="text-secondary hover:text-yellow-400"><Link prefetch={true} href="/blog">Blog</Link></li>
			</ul>
		</nav>
	);
};

export default Nav;
