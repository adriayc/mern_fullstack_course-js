import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Pages
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from './pages';
// Actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

// Check default theme
export const checkDefaultTheme = () => {
  // Get LS
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  // DOM
  document.body.classList.toggle('dark-theme', isDarkTheme);

  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
