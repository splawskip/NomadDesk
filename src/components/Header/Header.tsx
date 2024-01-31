import Link from "next/link";
import Nav from "../Nav/Nav";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";

type HeaderProps = {
	theme: string,
};

const Header = ({theme} : HeaderProps) => {
	// Build component.
	return (
		<header className="w-full flex justify-between items-center gap-4 border-b border-gray-100 bg-white-50 text-gray-950 dark:border-gray-600 dark:bg-gray-800 dark:text-white-50 p-6">
			<div className="flex justify-start items-center gap-4">
				<Link prefetch={true} href='/' className="flex justify-start items-center flex-nowrap gap-3 outline-none focus-visible:ring ring-blue-500">
					<Image src="/logo.webp" width={45} height={45} priority={true} alt="Logo of the site"></Image>
					<h1 className="text-secondary text-xl font-bold link">NomadDesk</h1>
				</Link>
				<p className="hidden md:block text-secondary text-sm">#1 Job Board for digital nomads</p>
				<ThemeToggle initialTheme={theme}></ThemeToggle>
			</div>
			<Nav></Nav>
		</header>
	);
};

export default Header;
