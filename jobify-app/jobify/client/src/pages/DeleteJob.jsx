import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';

// Actions
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success('Job deleted successfully');
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
  }
  // return redirect('/dashboard/all-jobs');
  return redirect('../all-jobs');
};

// Remove or comment
// const DeleteJob = () => {
//   return <h1>DeleteJob Page</h1>;
// };

// export default DeleteJob;
