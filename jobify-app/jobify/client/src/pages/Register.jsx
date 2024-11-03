import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Components
import { FormRow, Logo, SubmitBtn } from '../components';

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  // Transform a list of key-value pairs into an object
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    // return null;
    return redirect('/login');
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
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
        <SubmitBtn />
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
