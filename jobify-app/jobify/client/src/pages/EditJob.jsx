import { Form, redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Utils
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
// Components
import { FormRow, FormRowSelect, SubmitBtn } from '../components';

// Query
const singleJobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};

// Loader
export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));
      return params.id;
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-jobs');
    }
  };

// Action
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.patch(`/jobs/${params.id}`, data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job edited successfully');
      // return redirect('/dashboard/all-jobs');
      return redirect('../all-jobs');
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditJob = () => {
  const id = useLoaderData();
  const {
    data: { job },
  } = useQuery(singleJobQuery(id));

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
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
