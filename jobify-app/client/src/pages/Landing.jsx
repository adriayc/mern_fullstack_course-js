import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <div className="content">Some content</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: red;
  h1 {
    color: white;
  }
  .content {
    color: yellow;
    background: blue;
  }
`;

export default Landing;
