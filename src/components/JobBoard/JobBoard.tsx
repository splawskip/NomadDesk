import JobCard from "../JobCard";
import { Offer } from "@/types";

const JobBoard = async ({jobs}) => {
	// Build component.
	return (
		<section className="grid gap-4 grid-cols-3 p-6 bg-white-100 dark:bg-gray-900">
			{
				jobs.map((job:Offer) => (<JobCard key={job.id} job={job}></JobCard>))
			}
		</section>
	);
};

export default JobBoard;
