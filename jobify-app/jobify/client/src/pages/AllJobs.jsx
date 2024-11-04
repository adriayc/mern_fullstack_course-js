import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { JobsContainer, SearchContainer } from '../components';

// Loader
export const loader = async () => {
  console.log('Hello');
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// Define context
const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
// Export custom hook (Context)
export const useAllJobsContext = () => useContext(AllJobsContext);
// Export component
export default AllJobs;
