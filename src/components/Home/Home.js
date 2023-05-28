import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledHeading = styled.h1`
font-size: ${({theme}) => theme.primaryHeaderFontSize }px;
`;

// const StyledButton = styled.button`
// background-color: ${({theme}) =>theme.secondary}
// `;

const StyledHome = styled.div`
margin: 2rem;
`;

const StyledButtonContainer = styled.div`
display: flex;
gap: 1.5rem;
margin-top: 1.5rem;
`;

const Home = () => {
    return (
        <StyledHome>
          <StyledHeading>Welcom Home!</StyledHeading>
          <p>
            loremNulla ut eiusmod fugiat ullamco et sunt Lorem consequat irure aliquip magna eu. Non ullamco consectetur cillum reprehenderit voluptate tempor aute esse ullamco laboris.  
          </p>
          <StyledButtonContainer>
            {/* <StyledButton>Login</StyledButton>
            <StyledButton>Register</StyledButton> */}
            <Button variant="contained">Login</Button>
            <Button variant="outlined">Register</Button>
          </StyledButtonContainer>
        </StyledHome>
    );
};

export default Home;