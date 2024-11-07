import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Images
import { FormRow, Logo, SubmitBtn } from '../components';

// Action
export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Validation errors
    const errors = { msg: '' };
    if (data.password.length < 3) {
      errors.msg = 'password too short';
      return errors;
    }

    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Login successful');
      return redirect('/dashboard');
    } catch (error) {
      // console.log(error);
      // toast.error(error?.response?.data?.msg);
      errors.msg = error?.response?.data?.msg;
      return errors;
    }
  };

const Login = () => {
  // The most common use-case for this hook is form validation errors
  const errors = useActionData();

  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };

    try {
      await customFetch.post('auth/login', data);
      toast.success('Login successful');
      navigate('/dashboard');
    } catch (error) {
      // console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRow
          type="email"
          name="email"
          // defaultValue="adriano@mail.com"
        />
        <FormRow
          type="password"
          name="password"
          // defaultValue="secret123"
        />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
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
