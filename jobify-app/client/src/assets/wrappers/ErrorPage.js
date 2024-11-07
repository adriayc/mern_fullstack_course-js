import styled from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90vw;
    max-width: 600px;
    margin-top: -3rem;
    margin-bottom: 2rem;
    display: block;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--text-secondary-color);
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
