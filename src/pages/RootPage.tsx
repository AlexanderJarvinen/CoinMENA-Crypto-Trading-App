import React from "react";
import styled from "styled-components";

const RootWrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     height: 80vh;
`;

const RootPage: React.FC = () => {


    return (
        <RootWrapper>
            <h1>Please, Log in or Register!</h1>
        </RootWrapper>
    );
}

export default RootPage;
