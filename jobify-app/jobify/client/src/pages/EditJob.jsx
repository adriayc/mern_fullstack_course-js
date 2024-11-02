import { redirect, useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';

// Loader
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};

// Action
export const action = async () => {
  return null;
};

const EditJob = () => {
  // const params = useParams();
  const { job } = useLoaderData();
  console.log(job);

  return <h1>EditJob Page</h1>;
};

export default EditJob;
