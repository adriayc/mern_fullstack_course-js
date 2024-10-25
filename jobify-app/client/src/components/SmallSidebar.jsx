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
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  key={text}
                  to={path}
                  className="nav-link"
                  onClick={toggleSidebar}
                  // The end prop changes the matching logic for the active and pending states to only match to the "end" of the NavLink's to path. If the URL is longer than to, it will no longer be considered active.
                  end
                >
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
