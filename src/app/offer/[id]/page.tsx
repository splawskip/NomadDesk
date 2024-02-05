import { getJob } from "@/lib/jobs/api";
import { Offer } from "@/types";

type OfferProps = {
	params: {
		id: string | undefined
	}
};

export async function generateMetadata({ params } : OfferProps) {
	const job: Offer = await getJob(params.id ?? '');
	// Build metadata.
	return {
	  title: `${job.name} - Job Offer  <- NomadDesk`,
	  description: `Job Offer for ${job.name} on NomadDesk`,
	};
};

const Offer = async ({params} : OfferProps) => {
	const job: Offer = await getJob(params.id ?? '');
	// Build component.
	return (
		<>
			<h2 className="text-2xl font-semibold text-gray-950 dark:text-white-50">{job.name}</h2>
			<p className="text-base text-gray-800 dark:text-white-200" dangerouslySetInnerHTML={{ __html: job.contents }} />
		</>
	);
};

export default Offer;
