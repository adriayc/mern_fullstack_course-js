import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Images
import { FormRow, Logo } from '../components';

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="adriano@mail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
