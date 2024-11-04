import { Form, Link } from 'react-router-dom';
// Custom hook (Context)
import { useAllJobsContext } from '../pages/AllJobs';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Utils
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
// Components
import { FormRow, FormRowSelect, SubmitBtn } from './';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow type="search" name="search" defaultValue="a" />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue="all"
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue="all"
          />
          <FormRowSelect
            name="sort"
            labelText="sort"
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue={JOB_SORT_BY.NEWEST_FIRST}
          />
          {/* <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn"> */}
          <Link to="../all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
          {/* Temp!!! */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
