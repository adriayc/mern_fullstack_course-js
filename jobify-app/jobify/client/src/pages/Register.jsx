import { Form, Link, redirect, useNavigation } from 'react-router-dom';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { FormRow, Logo } from '../components';

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  // Transform a list of key-value pairs into an object
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    // return null;
    return redirect('/login');
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="adriano" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last name"
          defaultValue="ayala"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="adriano@mail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
