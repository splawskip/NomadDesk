'use client';

import { NAV } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { Menu, X } from "react-feather";

const Nav = () => {
	const pathname = usePathname();
	const id = useId();
	const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
	// Build component.
	return (
		<>
			<button type="button" name="Button that opens mobile side menu" className="block md:hidden" onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
				<Menu />
			</button>
			<nav className="hidden md:flex justify-end items-center">
				<ul className="flex justify-between items-center gap-4">
					{NAV.map(({slug, url}) => (
						<li key={`${id}-${slug}`} className="text-secondary">
							<Link prefetch={true} href={url} className={`link ${pathname === url ? 'link-active' : undefined} outline-none focus:ring ring-blue-500`}>{slug}</Link>
						</li>
					))}
				</ul>
			</nav>
			{isSideMenuOpen && (
				<div className="z-20 w-full sm:w-1/2 fixed inset-y-0 right-0 flex flex-col items-end justify-start gap-4 bg-white-100 dark:bg-gray-900 p-6 md:hidden">
					<button type="button" name="Button that closes mobile side menu" className="block md:hidden" onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
						<X />
					</button>
					<ul className="flex flex-col justify-start items-end gap-4 mt-10">
						{NAV.map(({slug, url}) => (
							<li key={`m-${id}-${slug}`} className="text-secondary">
								<Link prefetch={true} href={url} className={`link ${pathname === url ? 'link-active' : undefined} outline-none focus:ring ring-blue-500`}>{slug}</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Nav;
