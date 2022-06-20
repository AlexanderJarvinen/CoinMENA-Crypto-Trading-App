import React, {ReactElement, Ref, RefObject, useEffect, useRef, useState} from "react";
import ButtonOutlined from "../components/ButtonOutluned"
import styled from "styled-components";
import { DropdownListValue, CurrencyType }from "../types/componentsTypes";


const MAX_SIZE_OF_LIST = 8;

const DropdownWrapper = styled.div`
  width: 170px;
  position: absolute;
  z-index: 1000;
  top: 24px;
`;

const ControlWrapper = styled.div`
  position: relative;
  width: fit-content;
`;


const DropdownList = styled.ul<{ overflow: boolean | undefined }>`
    list-style: none;
    background-color: #fff5d7;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 2px solid #000000;
    padding-inline-start: 0;
    border-top: none;
    ${({ overflow}) => (overflow?'height: 50vh; overflow-y: auto;':null)};
 `;

const DropdownItem = styled.li`
    padding: 20px 0;
  
    :hover {
      background-color: #ebeb00;
    }
`;

type Props = {
    btnTitle: string | ReactElement<ReactElement, string> | null;
    list: DropdownListValue[];
    onSelect: (currency: CurrencyType) => void;
    icon?: string;
    fixWidth?: boolean;
    fixHeight?: boolean;
}

const TradeBtnOutlinedWithDropdown = ({ btnTitle, list, onSelect, icon, fixWidth }: Props) => {

    const [showList, setShowList] = useState<boolean>(false);

    const useOutsideAlerter = (ref: RefObject<HTMLUListElement>) => {
        useEffect(() => {

            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
                    setShowList(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <ControlWrapper >
            <ButtonOutlined
                btnTitle={btnTitle}
                fixedWidth={fixWidth}
                fixedHeight={fixWidth}
                onClick={(e) => {
                    e.preventDefault();
                    setShowList(!showList);
                }}
                icon={icon}
            />
            {showList?
                <DropdownWrapper >
                    <DropdownList ref={wrapperRef} overflow={list.length > MAX_SIZE_OF_LIST}>
                        { list.map((listItem) =>
                            <DropdownItem
                                key={listItem.key}
                                onClick={(e) => {
                                    onSelect({ name: listItem.name, symbol: listItem.value} );
                                    setShowList(false);
                                }}
                            >
                                {listItem.showName}
                            </DropdownItem>)
                        }
                    </DropdownList>
                </DropdownWrapper>
            :null}
        </ControlWrapper>
    );
}

export default TradeBtnOutlinedWithDropdown ;
