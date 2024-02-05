'use client';

import { SEARCH_VALUES } from "@/constants";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search as SearchIcon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import useInteractionOutsideRef from "@/hooks/interaction-outside-ref";

const Search = () => {
	const router = useRouter();
	const stringifiedSearchParams = useSearchParams().toString();
	const searchParams = useMemo(() => (new URLSearchParams(stringifiedSearchParams)), [stringifiedSearchParams]);
	const [query, setQueryValue] = useState(searchParams.get('category') ?? '');
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const hasSuggestions = suggestions.length > 0;
	const searchComponentRef = useRef<HTMLLabelElement | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	// Run the effect so we got stateful url.
	useEffect(() => {
		// Check if we got something.
		if(!query) {
			searchParams.delete('category');
			router.push(`/?${searchParams.toString()}`);
			return;
		}
		// Go to the query location.
		router.push(`/?${searchParams.toString()}`);
	}, [router, query, searchParams]);

	useInteractionOutsideRef(searchComponentRef, () => {
		if(suggestions.length > 0) {
			setSuggestions([]);
		}
	});

	const handleChangeOnInput = (event:React.ChangeEvent<HTMLInputElement>) : void => {
		const value = event.target.value;
		setQueryValue(value);

		if (value.length < 0) {
			setSuggestions([]);
		}

		const filteredSuggestions = SEARCH_VALUES.filter( (label) => (
			label.toLowerCase().includes(value.toLowerCase())
		));

		setSuggestions(filteredSuggestions);
	};

	const handleKeyDownOnSearch = (event: React.KeyboardEvent<HTMLLabelElement>): void => {
		switch (event.key) {
			case 'Escape':
				if(suggestions.length > 0){
					setSuggestions([]);
				}
				break;
			case 'Enter':
				if (searchInputRef.current && event.target === searchInputRef.current) {
					// If we are here it means that event.target is HTMLInputElement.
					const inputElement = event.target as HTMLInputElement;
					// If enter is pushed on empty input clear our search term and show all results.
					if (inputElement.value === '' && searchParams.has('category')) {
						searchParams.delete('category');
						router.push(`/?${searchParams.toString()}`);
						return;
					}
				}
				break;
		}
	};

	// Build component.
	return (
		<label ref={searchComponentRef} className='z-20 relative flex justify-start items-center gap-2 border-2 border-transparent bg-white-100 dark:bg-gray-950 rounded-3xl p-2 outline-none focus-within:ring ring-blue-500 text-gray-950 dark:text-white-50' onKeyDown={handleKeyDownOnSearch}>
			<VisuallyHidden>
				Type to search job category.
			</VisuallyHidden>
			<SearchIcon className="text-gray-950 dark:text-white-50"></SearchIcon>
			<input ref={searchInputRef} type="search" placeholder="Search" className="bg-transparent grow outline-none" value={query} onChange={handleChangeOnInput} />
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
