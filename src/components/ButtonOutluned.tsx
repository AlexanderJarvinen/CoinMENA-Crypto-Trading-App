import React, {ReactElement} from "react";
import styled from "styled-components";
import { Icon } from "../components/Icon";
import { ICON_SIZES } from "../constsants/constants";


const BtnOutlined = styled.button<{ fixedWidth: boolean | undefined, fixedHeight: boolean | undefined }>`
    padding: 10px 30px;
    border-radius: 5px;
    background-color: #e5be01;
    cursor: pointer;
    transition: all 0.7s;
  ${({ fixedWidth }) => (fixedWidth?'width: 170px':null)};
  ${({ fixedHeight }) => (fixedHeight?'height: 40px':null)};

      &:hover {
        background-color: #f7f41b;
      }

      &:active {
        background-color: #cccc00;
      }

`;

const IconWrapper = styled.div`
     margin-left: 5px;
     display: flex;
`;

const BtnInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  

`;

type Props = {
    btnTitle: string | ReactElement<any, any>;
    icon?: any;
    onClick: (e: any) => void;
    fixedWidth?: boolean;
    fixedHeight?: boolean;
};


const ButtonOutlined = ({ btnTitle, icon, onClick, fixedWidth, fixedHeight }:Props) => {
    return (

            <BtnOutlined onClick={onClick} fixedWidth={fixedWidth} fixedHeight={fixedHeight}>
                <BtnInnerContainer >
                    { btnTitle }
                    {icon?
                        <IconWrapper><Icon icon={icon} iconSize={ICON_SIZES.BTN_SIZE}/></IconWrapper>
                        : null
                    }
                </BtnInnerContainer >
            </BtnOutlined>
    );
};

export default ButtonOutlined;
