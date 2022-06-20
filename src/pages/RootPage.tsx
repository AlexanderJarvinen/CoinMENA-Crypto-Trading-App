import React from "react";
import styled from "styled-components";
import {TYPOGRAPHY} from "../constsants/constants";

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
            <h1>{TYPOGRAPHY.LOGIN_TITLE}</h1>
        </RootWrapper>
    );
}

export default RootPage;
