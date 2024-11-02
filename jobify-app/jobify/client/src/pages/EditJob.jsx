import { useParams } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';

// Loader
export const loader = async ({ params }) => {
  console.log(params);
  return null;
};

// Action
export const action = async () => {
  return null;
};

const EditJob = () => {
  const params = useParams();
  console.log(params);

  return <h1>EditJob Page</h1>;
};

export default EditJob;
