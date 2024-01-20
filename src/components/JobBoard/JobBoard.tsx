import { getJobs } from "@/lib/jobs/api";
import JobCard from "../JobCard";
import { Offer } from "@/types";

const JobBoard = async () => {
	const {results} = await getJobs();
	return (
		<section className="grid gap-4 grid-cols-3 p-6 bg-white-100 dark:bg-gray-900">
			{
				results.map((job:Offer) => (<JobCard key={job.id} job={job}></JobCard>))
			}
		</section>
	);
};

export default JobBoard;
