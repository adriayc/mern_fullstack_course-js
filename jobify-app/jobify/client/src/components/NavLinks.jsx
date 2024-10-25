import { NavLink } from 'react-router-dom';
// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Utils
import links from '../utils/links';

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            key={text}
            to={path}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            // The end prop changes the matching logic for the active and pending states to only match to the "end" of the NavLink's to path. If the URL is longer than to, it will no longer be considered active.
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
