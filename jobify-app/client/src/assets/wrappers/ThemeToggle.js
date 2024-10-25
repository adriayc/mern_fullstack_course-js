import styled from 'styled-components';

const Wrapper = styled.button`
  width: 3.5rem;
  height: 2rem;
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  display: grid;
  place-items: center;
  .toggle-icon {
    color: var(--text-color);
    font-size: 1.15rem;
  }
`;

export default Wrapper;
