import React from "react";
import styled from "styled-components";

const IconImg = styled.img`
    width: 16px;
    height: 16px;
`;


type Props = {
    icon: string;
};

export const Icon = ({ icon }:Props) => {
    return (
        <>
            <IconImg src={icon} />
        </>

    );
};

