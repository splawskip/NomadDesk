import Link from "next/link";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { SOCIALS } from "@/constants";
import React from "react";

const Footer = () => {
	const id = React.useId();
	// Build component.
	return (
		<footer className="mt-auto w-full flex justify-between items-center gap-4 border-b border-gray-100 bg-white-50 text-gray-950 dark:border-gray-600 dark:bg-gray-800 dark:text-white-50 p-6">
			<Link href='/'>
				<h2 className="text-secondary text-xl font-bold">NomadDesk</h2>
			</Link>
			<ul className="flex gap-4 justify-between items-center">
				{SOCIALS.map(({name, url, Icon}) => {
					return (
						<li key={`${id}-${name}`}>
						<a href={url} rel="noopener noreferrer">
							<Icon/>
							<VisuallyHidden>{name}</VisuallyHidden>
						</a>
					</li>
					);
				}
				)}
			</ul>
		</footer>
	);
};

export default Footer;
