import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Utils
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
// Components
import { FormRow, FormRowSelect } from '../components';

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
  const { job } = useLoaderData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow
            type="text"
            name="company"
            labelText="job location"
            defaultValue={job.company}
          />
          <FormRow
            type="text"
            name="jobLocation"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job.JOB_TYPE}
            list={Object.values(JOB_TYPE)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
