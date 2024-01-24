'use client';

import { SEARCH_VALUES } from "@/constants";
import useDebounce from "@/hooks/debounce";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "react-feather";

const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [value, setValue] = useState(searchParams.get('category') ?? '');
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const query = useDebounce(value, 500);
	// Run the effect so we got stateful url.
	useEffect(() => {
		// Get query value.
		const queryValue = query;
		// Check if we got something.
		if(!queryValue) {
			router.push('/');
			return;
		}
		// Go to the query location.
		router.push(`?category=${queryValue}`);
	}, [router, query]);

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setValue(value);

		if(value.length < 0) {
			setSuggestions([]);
		}

		const filteredSuggestions = SEARCH_VALUES.filter( (label) => (
			label.toLowerCase().includes(value.toLowerCase())
		));

		setSuggestions(filteredSuggestions);
	};
	// Build component.
	return (
		<div className="relative flex justify-start items-center gap-2 border-2 border-transparent bg-white-100 dark:bg-gray-950 rounded-3xl p-2 focus-within:border-gray-950 dark:focus-within:border-white-50 text-gray-950 dark:text-white-50">
			<SearchIcon className="text-gray-950 dark:text-white-50"></SearchIcon>
			<input type="search" placeholder="Search" className="bg-transparent grow outline-none" value={query} onChange={handleChange}/>
			{suggestions.length > 0 && (
				<ul className="absolute max-h-72 overflow-y-scroll top-full right-0 left-0 p-6 flex gap-3 flex-col justify-start items-start shadow shadow-white-50/20 bg-white-50 dark:bg-gray-800">
					{suggestions.map((suggestion) => (
						<Link key={suggestion} href={`/?category=${suggestion}`} className="w-full">
							<li className="w-full">{suggestion}</li>
						</Link>
					))}
				</ul>
			)}
		</div>
	);
};

export default Search;
