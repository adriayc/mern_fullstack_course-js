import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  border-radius: var(--border-radius);
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    width: 100%;
    max-width: 100%;
    padding: 0;
    border-radius: 0;
    margin: 0;
    box-shadow: none;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    margin-top: 1rem;
    display: grid;
    place-items: center;
    align-self: end;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
