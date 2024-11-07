import { Link, useRouteError } from 'react-router-dom';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/ErrorPage';
// Images
import img from '../assets/images/not-found.svg';

const Error = () => {
  // This hook return anything thrown during an action, loader, or rendering
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not found" />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
