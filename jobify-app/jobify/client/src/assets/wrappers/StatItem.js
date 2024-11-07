import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  /* Access props */
  border-bottom: 5px solid ${(props) => props.color};
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .count {
    /* Access props */
    color: ${(props) => props.color};
    font-size: 50px;
    font-weight: 700;
    line-height: 2;
  }
  .title {
    font-size: 1.25rem;
    text-transform: capitalize;
    text-align: left;
    letter-spacing: var(--letter-spacing);
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    /* Access props */
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      /* Access props */
      color: ${(props) => props.color};
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
