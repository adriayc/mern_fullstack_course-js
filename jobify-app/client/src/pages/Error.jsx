import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  // This hook return anything thrown during an action, loader, or rendering
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default Error;
