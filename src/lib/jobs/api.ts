import jobsConfig from "./config";

export const getJobs = async (queryArgs = {}) => {
	try {
		// Create search params object.
		const searchParams = new URLSearchParams(queryArgs);
		// Append API key to search params.
		searchParams.set('api_key', process.env.THE_MUSE_API_KEY ?? '');
		// Set page parameter if it is missing.
		if (!searchParams.has('page')){
			searchParams.set('page', '1');
		}
		// Call the endpoint.
		const response = await fetch( `${jobsConfig.endpoint}?${searchParams.toString()}` );
		// Get jobs as JSON.
		const jobs = await response.json();
		// Spit it out.
		return jobs;
	} catch (error) {
		throw new Error('Unable to get jobs.');
	}
};

export const getJob = async (jobId = '') => {
	try {
		const response = await fetch( `${jobsConfig.endpoint}/${jobId}` );
		const job = await response.json();
		return job;
	} catch (error) {
		throw new Error('Unable to get job.');
	}
};
