import { SearchParams } from "@/types";
import { range } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { useId } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

type PaginationProps = {
	count?: number;
	searchParams?: SearchParams;
};

const Pagination = ({ count = 0, searchParams = {} } : PaginationProps) => {
    const id = useId();
    const currentPage = Number(searchParams.page ?? 1);
    const maxPageIndicator = 11;

    if (count <= 1) {
        return;
    }

    // Calculate the start and end page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxPageIndicator / 2));
    let endPage = Math.min(count, startPage + maxPageIndicator - 1);

    // Adjust the start page if we're near the end
    startPage = Math.max(1, endPage - maxPageIndicator + 1);

    // Previous and Next URL setup
    const previousUrl = new URLSearchParams(searchParams);
    previousUrl.set('page', `${Math.max(1, currentPage - 1)}`);

    const nextUrl = new URLSearchParams(searchParams);
    nextUrl.set('page', `${Math.min(count, currentPage + 1)}`);

    return (
        <nav className="w-full flex justify-center items-center flex-wrap bg-white-100 dark:bg-gray-900 px-6 pb-6">
            <ul className="flex text-base min-h-10 flex-wrap justify-center items-center">
				{currentPage !== 1 && (
					<li className="hidden md:block">
                    	<Link href={`/?${previousUrl.toString()}`} prefetch={true} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-950 bg-white-50 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white outline-none focus-visible:relative focus-visible:z-10 focus-visible:ring ring-blue-500"><VisuallyHidden>Previous Page</VisuallyHidden><ArrowLeft /></Link>
                	</li>
				)}
                {range(startPage, endPage).map((pageNumber) => {
                    const currentUrl = new URLSearchParams(searchParams);
                    currentUrl.set('page', pageNumber.toString());
                    const isCurrent = pageNumber === currentPage;
                    return (
                        <li key={`${id}-${pageNumber}`}>
                            <Link href={`/?${currentUrl.toString()}`} prefetch={true} className={clsx('flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 text-gray-950', isCurrent ? 'bg-white-200 dark:bg-gray-950 dark:text-white-100 font-semibold' : 'bg-white-50 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800' ,'dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white outline-none focus-visible:relative focus-visible:z-10 focus-visible:ring ring-blue-500')}>
								<VisuallyHidden>Page #</VisuallyHidden>{pageNumber}
                            </Link>
                        </li>
                    );
                })}
				{currentPage !== (count - 1) && (
                	<li className="hidden md:block">
						<Link href={`/?${nextUrl.toString()}`} prefetch={true} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-950 bg-white-50 border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white outline-none focus-visible:relative focus-visible:z-10 focus-visible:ring ring-blue-500"><VisuallyHidden>Next Page</VisuallyHidden><ArrowRight /></Link>
					</li>
				)}
            </ul>
        </nav>
    );
};

export default Pagination;
