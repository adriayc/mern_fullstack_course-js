import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  .logo {
    margin: 0 auto;
    margin-bottom: 1.38rem;
    display: block;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  .btn {
    margin-top: 1rem;
  }
  p {
    text-align: center;
    line-height: 1.5;
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

export default Wrapper;
