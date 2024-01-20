import jobsConfig from "./config";

export const getJobs = async () => {
	try {
		const response = await fetch( `${jobsConfig.endpoint}?page=1` );
		const jobs = await response.json();
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
