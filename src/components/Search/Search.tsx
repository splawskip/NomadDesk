import { Search as SearchIcon } from "react-feather";

const Search = () => {
	return (
		<div className="flex justify-start items-center gap-2 border-2 border-transparent bg-white-100 dark:bg-gray-950 rounded-3xl p-2 focus-within:border-gray-950 dark:focus-within:border-white-50 text-gray-950 dark:text-white-50">
			<SearchIcon className="text-gray-950 dark:text-white-50"></SearchIcon>
			<input type="search" placeholder="Search" className="bg-transparent grow outline-none"/>
		</div>
	);
};

export default Search;
