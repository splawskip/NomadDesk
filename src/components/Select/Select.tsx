'use client';

import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { Sliders } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";

const Select = () => {
	const router = useRouter();
	const stringifiedSearchParams = useSearchParams().toString();
	const searchParams = useMemo(() => (new URLSearchParams(stringifiedSearchParams)), [stringifiedSearchParams]);
	const [value, setValue] = useState('false');

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const nextValue = event.target.value ?? 'false';
		searchParams.set('descending', nextValue);
		setValue(nextValue);
		router.push(`/?${searchParams.toString()}`);
	};
	// Build component.
	return (
		<label className='relative min-w-28 text-center flex justify-start items-center gap-2 border-2 border-transparent outline-none focus-within:ring ring-blue-500 rounded-3xl p-2 bg-white-100 dark:bg-gray-950 text-gray-950 dark:text-white-50'>
			<VisuallyHidden>Sort by: </VisuallyHidden>
			<Sliders className="pointer-events-none text-gray-950 dark:text-white-50"/>
			<select name="descending" className="appearance-none absolute inset-0 w-full pl-11 bg-transparent grow outline-none" value={value} onChange={handleChange}>
				<option value="false">
					Latest
				</option>
				<option value="true">
				Oldest
				</option>
			</select>
		</label>
	);
};

export default Select;
