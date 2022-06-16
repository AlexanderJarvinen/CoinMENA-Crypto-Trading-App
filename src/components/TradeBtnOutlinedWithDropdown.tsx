import React, {useState} from "react";
import ButtonOutlined from "../components/ButtonOutluned"
import styled from "styled-components";
import { TYPOGRAPHY } from "../constsants/constants";

type Props = {
    title: string;
}

const DropdownWrapper = styled.div`
  width: 150px;
  position: absolute;
  z-index: 1000;
  top: 24px;
`;

const ControlWrapper = styled.div`
  position: relative;
  width: fit-content;
`;


const DropdownList = styled.ul`
    list-style: none;
    background-color: #fff5d7;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 2px solid #000000;
    padding-inline-start: 0;
    border-top: none;

`;

const DropdownItem = styled.li`
    padding: 20px 0;
  
    :hover {
      background-color: #ebeb00;
    }
`;

const TradeBtnOutlinedWithDropdown = ({ title }: Props) => {

    const [showList, setShowList] = useState<boolean>(false)

    return (
        <ControlWrapper>
            <ButtonOutlined btnTitle={title} fixedWidth onClick={() => {setShowList(!showList)}} />
            {showList?
                <DropdownWrapper>
                    <DropdownList>
                        <DropdownItem onClick={() => {setShowList(!showList)}}>{TYPOGRAPHY.BUY_ITEM}</DropdownItem>
                        <DropdownItem onClick={() => {setShowList(!showList)}}>{TYPOGRAPHY.SELL_ITEM}</DropdownItem>
                    </DropdownList>
                </DropdownWrapper>
            :null}
        </ControlWrapper>
    );
}

export default TradeBtnOutlinedWithDropdown ;