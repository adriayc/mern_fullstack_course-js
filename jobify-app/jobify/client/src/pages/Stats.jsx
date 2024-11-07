import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQueries, useQuery } from '@tanstack/react-query';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { ChartsContainer, StatsContainer } from '../components';

// Loader
export const loader = async () => {
  return null;
  const { data } = await customFetch.get('/jobs/stats');
  return data;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();

  // const response = useQuery({
  const { isLoading, isError, data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => customFetch.get('/jobs/stats'),
  });
  // console.log(data);

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error...</h4>;
  const { defaultStats, monthlyApplications } = data.data;

  // return <h1>React query</h1>;

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
