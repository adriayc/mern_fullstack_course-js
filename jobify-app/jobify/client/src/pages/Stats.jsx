import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { QueryClient, useQueries, useQuery } from '@tanstack/react-query';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { ChartsContainer, StatsContainer } from '../components';

// Query
const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

// Loader
export const loader = (queryClient) => async () => {
  // const data = await queryClient.ensureQueryData(statsQuery);
  // return data;
  await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();

  // const { isLoading, isError, data } = useQuery(statsQuery);
  const { data } = useQuery(statsQuery);
  const { defaultStats, monthlyApplications } = data;

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
