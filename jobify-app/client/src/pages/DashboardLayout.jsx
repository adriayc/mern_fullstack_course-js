import { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/Dashboard';
// Functions
import { checkDefaultTheme } from '../App';
// Components
import { SmallSidebar, BigSidebar, Navbar } from '../components';

// Define context
const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  // Temp
  const user = { name: 'adriano' };

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
    console.log('Logout user');
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
              <Outlet />
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
