import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrappers
import Wrapper from '../assets/wrappers/StatsContainer';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';

// Loader
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/admin/app-stats');
    return data;
  } catch (error) {
    // console.log(error);
    // toast.error(error?.response?.data?.msg);
    // return error;
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <Wrapper>
      <h1>admin page</h1>
    </Wrapper>
  );
};

export default Admin;
