import { Form, useNavigation, useOutletContext } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Components
import { FormRow } from '../components';

const AddJob = () => {
  const { user } = useOutletContext();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow text="text" name="position" />
          <FormRow text="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
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

export default AddJob;
