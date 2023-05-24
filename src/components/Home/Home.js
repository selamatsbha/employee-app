import styled from 'styled-components';

const StyledHeading = styled.h1`
font-size: ${({theme}) => theme.primaryHeaderFontSize }px;
`;

const StyledButton = styled.button`
background-color: ${({theme}) =>theme.secondary}
`;

const Home = () => {
    return (
        <>
          <StyledHeading>Welcom Home!</StyledHeading>
          <p>
            loremNulla ut eiusmod fugiat ullamco et sunt Lorem consequat irure aliquip magna eu. Non ullamco consectetur cillum reprehenderit voluptate tempor aute esse ullamco laboris.  
          </p>
          <StyledButton>Login</StyledButton>
          <StyledButton>Register</StyledButton>
        </>
    );
};

export default Home;