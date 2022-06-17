import {Icon} from "./Icon";
import { ArrowDown } from "../assets/icons";
import styled from "styled-components";
import {ICON_SIZES} from "../constsants/constants";
import React from "react";

const SwapBackground = styled.div`
    width: 50px;
    height: 50px;
    background-color: #b3b3b3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    position: relative;
    top: -180px;
`;

const SwapWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SwapButton = () => {
    return (
        <SwapWrapper>
            <SwapBackground>
                <Icon icon={ArrowDown} iconSize={ICON_SIZES.CELL_SIZE} />
            </SwapBackground>
        </SwapWrapper>
    )
}

export default SwapButton
