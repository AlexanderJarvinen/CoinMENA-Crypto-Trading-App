import React from "react";
import styled from "styled-components";

const IconImg = styled.img<{ iconSize: string }>`
  ${({ iconSize }) => (`width: ${iconSize}`)};
  ${({ iconSize }) => (`height: ${iconSize}`)};
`;


type Props = {
    icon: string;
    iconSize: string;
};

export const Icon = ({ icon, iconSize }:Props) => {
    return (
        <>
            <IconImg src={icon} iconSize={iconSize} />
        </>

    );
};

