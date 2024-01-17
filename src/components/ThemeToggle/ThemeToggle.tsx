'use client';

import { useState } from "react";
import Cookies from 'js-cookie';
import { Moon, Sun } from "react-feather";

type ThemeToggleProps = {
	initialTheme: string,
};

const ThemeToggle = ({initialTheme} : ThemeToggleProps) => {
	const [theme, setTheme] = useState(initialTheme);
	const ThemeIcon = theme === 'light' ? Sun : Moon;
	function handleToggleTheme() {
		// Resolve what nextTheme will be.
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		// Set new theme.
		setTheme(nextTheme);
		// Set current theme as Cookie.
		Cookies.set('theme', nextTheme, {
			expires: 1000,
		});

		const root = document.documentElement;

		root.setAttribute('data-color-theme', nextTheme);
	};

	return (
		<button type="button" className={`flex ${theme === 'light' ? 'justify-start' : 'justify-end'} items-center h-8 w-14 bg-gray-500 rounded-3xl`} onClick={handleToggleTheme}>
			<span className="grid place-items-center h-6 w-6 bg-primary rounded-full m-1">
				<ThemeIcon className="h-4 w-4 text-secondary"></ThemeIcon>
			</span>
		</button>
	);
}

export default ThemeToggle;