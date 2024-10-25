import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    inset: 0;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition);
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .show-sidebar {
    visibility: visible;
    opacity: 1;
    z-index: 99;
  }
  .content {
    height: 95vh;
    width: var(--fluid-width);
    background: var(--background-secondary-color);
    padding: 4rem 2rem;
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .close-btn {
    color: var(--red-dark);
    background: transparent;
    font-size: 2rem;
    border-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    color: var(--text-secondary-color);
    text-transform: capitalize;
    padding: 1rem 0;
    transition: var(--transition);
    display: flex;
    align-items: center;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`;

export default Wrapper;
