import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "./queryKeys";
import { getJobs } from "../jobs/api";

export const useGetJobs = () => useQuery({
	queryKey: [QUERY_KEYS.GET_JOBS],
	queryFn: getJobs,
});
