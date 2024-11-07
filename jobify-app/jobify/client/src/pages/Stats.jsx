import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { ChartsContainer, StatsContainer } from '../components';

// Loader
export const loader = async () => {
  // try {
  //   const { data } = await customFetch.get('/jobs/stats');
  //   return data;
  // } catch (error) {
  //   // console.log(error);
  //   toast.error(error?.response?.data?.msg);
  //   return error;
  // }

  const { data } = await customFetch.get('/jobs/stats');
  return data;
};

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  // console.log(monthlyApplications);

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
