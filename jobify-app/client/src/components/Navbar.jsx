import { FaAlignLeft } from 'react-icons/fa';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/Navbar';
// Components
import { Logo } from '../components';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">Toggle/Logout</div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
