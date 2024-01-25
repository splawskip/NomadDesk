import JobCard from "../JobCard";
import { Offer } from "@/types";

type JobBoardProps = {
	jobs: Offer[],
};

const JobBoard = async ({jobs} : JobBoardProps) => {
	// Build component.
	return (
		<section className="grow grid gap-4 grid-cols-4 p-6 bg-white-100 dark:bg-gray-900">
			{
				jobs.map((job:Offer) => (<JobCard key={job.id} job={job}></JobCard>))
			}
		</section>
	);
};

export default JobBoard;