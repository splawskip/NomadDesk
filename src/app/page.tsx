import ActionBar from "@/components/ActionBar";
import JobBoard from "@/components/JobBoard";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Select from "@/components/Select";
import { getJobs } from "@/lib/jobs/api";
import { SearchParams } from "@/types";

type HomeProps = {
	searchParams: SearchParams,
};

export default async function Home({searchParams} : HomeProps) {
	const {page_count, results} = await getJobs(searchParams);
  return (
	<main className='w-full min-h-screen flex flex-col'>
		<ActionBar className="flex flex-col sm:flex-row sm:justify-between gap-3 p-6 bg-white-50 dark:bg-gray-800">
			<Search />
			<Select />
		</ActionBar>
		<JobBoard jobs={results}></JobBoard>
		<Pagination searchParams={searchParams} count={page_count}></Pagination>
	</main>
  )
}
