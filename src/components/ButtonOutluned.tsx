import React, {MouseEventHandler, ReactElement} from "react";
import styled from "styled-components";
import { Icon } from "../components/Icon";
import { ICON_SIZES } from "../constsants/constants";


const BtnOutlined = styled.button<{ fixedWidth: boolean | undefined, fixedHeight: boolean | undefined, active: boolean | undefined }>`
    padding: 10px 30px;
    border-radius: 5px;
  ${({ active }) => (active?'background-color: #f7f41b;': 'background-color: #e5be01;')};
  ${({ active }) => (active?'border-color: #cccc00;': null )};
    
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
    btnTitle: string | ReactElement<ReactElement, string> | null;
    icon?: string;
    onClick: MouseEventHandler<HTMLButtonElement>
    fixedWidth?: boolean;
    fixedHeight?: boolean;
    active?: boolean;
};


const ButtonOutlined = ({ btnTitle, icon, onClick, fixedWidth, fixedHeight, active }:Props) => {
    return (

            <BtnOutlined active={active} onClick={onClick} fixedWidth={fixedWidth} fixedHeight={fixedHeight}>
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
