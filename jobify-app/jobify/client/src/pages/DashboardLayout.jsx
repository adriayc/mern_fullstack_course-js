import { createContext, useContext, useState } from 'react';
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/Dashboard';
// Custom fetch (Axios)
import customFetch from '../utils/customFetch';
// Functions
import { checkDefaultTheme } from '../App';
// Components
import { SmallSidebar, BigSidebar, Navbar, Loading } from '../components';
import { toast } from 'react-toastify';

// Query
const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

// Loader
export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    console.log(error);
    return redirect('/');
  }
};

// Define context
const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled, queryClient }) => {
  // Get loader data
  // const { user } = useLoaderData();
  // Get query client
  const { user } = useQuery(userQuery).data;

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDartTheme = !isDarkTheme;
    setIsDarkTheme(newDartTheme);
    // DOM
    document.body.classList.toggle('dark-theme', newDartTheme);
    // LS
    localStorage.setItem('darkTheme', newDartTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.success('Logging out...');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

// Export custom hook (Context)
export const useDashboardContext = () => useContext(DashboardContext);
// Export component
export default DashboardLayout;
