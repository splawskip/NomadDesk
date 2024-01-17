import ThemeToggle from "../ThemeToggle/ThemeToggle";

type HeaderProps = {
	theme: string,
};

const Header = ({theme} : HeaderProps) => {
	return (
		<header className="w-full flex justify-start items-center gap-4 bg-primary p-6">
			<h1 className="text-secondary">NomadDesk</h1>
			<p className="text-secondary">#1 Job Board for digital nomads</p>
			<ThemeToggle initialTheme={theme}></ThemeToggle>
		</header>
	);
};

export default Header;
