'use client';

import { SEARCH_VALUES } from "@/constants";
import useDebounce from "@/hooks/debounce";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search as SearchIcon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import useInteractionOutsideRef from "@/hooks/interaction-outside-ref";

const Search = () => {
	const router = useRouter();
	const stringifiedSearchParams = useSearchParams().toString();
	const searchParams = useMemo(() => (new URLSearchParams(stringifiedSearchParams)), [stringifiedSearchParams]);
	const [value, setValue] = useState(searchParams.get('category') ?? '');
	const query = value;
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const hasSuggestions = suggestions.length > 0;
	const searchRef = useRef<HTMLLabelElement | null>(null);
	// Run the effect so we got stateful url.
	useEffect(() => {
		// Get query value.
		const queryValue = value;
		// Check if we got something.
		if(!queryValue) {
			searchParams.delete('category', queryValue);
			router.push(`/?${searchParams.toString()}`);
			return;
		}
		// Go to the query location.
		router.push(`/?${searchParams.toString()}`);
	}, [router, value, searchParams]);

	useInteractionOutsideRef(searchRef, () => {
		setSuggestions([]);
	});

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setValue(value);

		if (value.length < 0) {
			setSuggestions([]);
		}

		const filteredSuggestions = SEARCH_VALUES.filter( (label) => (
			label.toLowerCase().includes(value.toLowerCase())
		));

		setSuggestions(filteredSuggestions);
	};

	// Build component.
	return (
		<label ref={searchRef} className={`z-20 relative flex justify-start items-center gap-2 border-2 border-transparent bg-white-100 dark:bg-gray-950 rounded-3xl p-2 outline-none focus-within:ring ring-blue-500 text-gray-950 dark:text-white-50`}>
			<VisuallyHidden>
				Type to search job category.
			</VisuallyHidden>
			<SearchIcon className="text-gray-950 dark:text-white-50"></SearchIcon>
			<input type="search" placeholder="Search" className="bg-transparent grow outline-none" value={query} onChange={handleChange} />
			{hasSuggestions && (
				<ul className="transition-colors absolute max-h-72 overflow-y-scroll border-2 border-white-200 top-suggestions right-0 left-0 p-6 flex gap-3 flex-col justify-start items-start rounded-3xl shadow-white-950/50 bg-white-50 dark:bg-gray-800 dark:border-gray-700">
					{suggestions.map((suggestion) => (
							<Link prefetch={true} key={suggestion} href={`/?category=${suggestion}`} className="link w-full px-4 py-1 rounded-3xl outline-none focus-visiblen:ring ring-blue-500 focus-visible:bg-white-100 hover:bg-white-100 dark:focus-visible:bg-gray-950 dark:hover:bg-gray-950" onClick={() => setSuggestions([])}>
								<li className="w-full">{suggestion}</li>
							</Link>
						)
					)}
				</ul>
			)}
		</label>
	);
};

export default Search;
