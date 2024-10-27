// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/BigSidebar';
// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Components
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;