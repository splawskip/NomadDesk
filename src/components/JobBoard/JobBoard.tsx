import JobCard from "../JobCard";
import { Offer } from "@/types";

type JobBoardProps = {
	jobs: Offer[],
};

const JobBoard = async ({jobs} : JobBoardProps) => {
	// Build component.
	return (
		<section className="grow grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 bg-white-100 dark:bg-gray-900">
			{
				jobs.length > 0 ? (
					jobs.map((job:Offer) => (<JobCard key={job.id} job={job}></JobCard>))
				) : (
					<div className="col-span-full text-center font-semibold">
						<h2 className="text-2xl font-semibold text-gray-950 dark:text-white-50">No results matching your criteria 🌱.</h2>
						<p className="text-base font-light text-gray-950/80 dark:text-white-50/80">Please modify your filters.</p>
					</div>
				)
			}
		</section>
	);
};

export default JobBoard;
