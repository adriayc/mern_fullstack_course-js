import styled from 'styled-components';

const StyledBtn = styled.button`
  color: white;
  background: red;
  font-size: 1.5rem;
`;

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <StyledBtn>Styled Btn</StyledBtn>
    </div>
  );
};

export default Landing;
