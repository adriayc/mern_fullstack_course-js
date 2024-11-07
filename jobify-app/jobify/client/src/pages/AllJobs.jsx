import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { JobsContainer, SearchContainer } from '../components';
import { useQuery } from '@tanstack/react-query';

// Query
const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      'jobs',
      search ?? '',
      jobStatus ?? 'all',
      jobType ?? 'all',
      sort ?? 'newest',
      page ?? '1',
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/jobs', {
        params,
      });
      return data;
    },
  };
};

// Loader
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // Get search params (object)
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    // Get jobs (With params)
    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params } };
  };

// Define context
const AllJobsContext = createContext();

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
// Export custom hook (Context)
export const useAllJobsContext = () => useContext(AllJobsContext);
// Export component
export default AllJobs;
