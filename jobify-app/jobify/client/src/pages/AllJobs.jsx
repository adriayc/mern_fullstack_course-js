import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { JobsContainer, SearchContainer } from '../components';

// Loader
export const loader = async ({ request }) => {
  // console.log(request.url);
  // Get search params (object)
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);

  try {
    // Get jobs (With params)
    const { data } = await customFetch.get('/jobs', {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// Define context
const AllJobsContext = createContext();

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

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
