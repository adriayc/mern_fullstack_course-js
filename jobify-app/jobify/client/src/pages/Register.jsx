import { Link } from 'react-router-dom';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Components
import { FormRow, Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
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
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
