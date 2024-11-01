import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { JobsContainer, SearchContainer } from '../components';

// Loader
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobs = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
