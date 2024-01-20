import Link from "next/link";
import { Facebook, GitHub, Instagram, Linkedin, Youtube } from "react-feather";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

const Footer = () => {
	return (
		<footer className="mt-auto w-full flex justify-between items-center gap-4 border-b border-gray-100 bg-white-50 text-gray-950 dark:border-gray-600 dark:bg-gray-800 dark:text-white-50 p-6">
			<Link href='/'>
				<h2 className="text-secondary text-xl font-bold">NomadDesk</h2>
			</Link>
			<ul className="flex gap-4 justify-between items-center">
				<li>
					<a href="">
						<Facebook/>
						<VisuallyHidden>Facebook</VisuallyHidden>
					</a>
				</li>
				<li>
					<a href="">
						<Instagram/>
						<VisuallyHidden>Instagram</VisuallyHidden>
					</a>
				</li>
				<li>
					<a href="">
						<Linkedin/>
						<VisuallyHidden>LinkedIn</VisuallyHidden>
					</a>
				</li>
				<li>
					<a href="">
						<Youtube/>
						<VisuallyHidden>Youtube</VisuallyHidden>
					</a>
				</li>
				<li>
					<a href="">
						<GitHub/>
						<VisuallyHidden>Github</VisuallyHidden>
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
