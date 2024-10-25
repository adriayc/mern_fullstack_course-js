import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
// Wrapper (Styled Components)
import Wrapper from '../assets/wrappers/SmallSidebar';
// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Utils
import links from '../utils/links';
// Components
import { Logo } from '../components';

const SmallSidebar = () => {
  const data = useDashboardContext();

  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink key={text} to={path} className="nav-link">
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
