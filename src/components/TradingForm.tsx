
import React, {ReactElement} from "react";
import Input from "./Input";
import ButtonOutluned from "./ButtonOutluned";
import TradeBtnOutlinedWithDropdown from "./TradeBtnOutlinedWithDropdown";
import SwapButton from "./SwapButton";
import styled from "styled-components";
import { TYPOGRAPHY } from "../../src/constsants/constants";

const BtnWrapper = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;
`;

const CryptoCurrencyCombobox= styled.div`
  width: fit-content;
  float: right;
  position: relative;
  top: -157px;
  right: 8px;
`;


type Props = {
    title: string;
    list: any[];
    chooseCurrency: (currency: string) => void;
    btnTitle: ReactElement<any, any> ;
    icon: any;
    cryptoAmount?: string;
    placeholder: string
    onChange: (e: any) => void;
};

const TradingForm = ({ title, list, chooseCurrency, btnTitle, icon, cryptoAmount, onChange, placeholder }:Props) => {
        return (
            <>
                <div
                    className="formContainer"
                >
                    <div className="form" >


                        <main className="form_content">
                            <header className="form_header">
                                <h2 className="form_header-title"> {title} </h2>
                            </header>

                                <Input
                                    type={ "number"}
                                    value={cryptoAmount}
                                    onChange={onChange}
                                    placeholder={placeholder}
                                />


                            <Input
                                type={ "text"}
                                value={""}
                                onChange={(e) => (e)}
                                placeholder={placeholder}
                            />
                            <CryptoCurrencyCombobox>
                                <TradeBtnOutlinedWithDropdown
                                    btnTitle={btnTitle}
                                    list={list}
                                    onSelect={chooseCurrency}
                                    icon={icon}
                                    fixWidth
                                    fixHeight
                                />
                            </CryptoCurrencyCombobox>
                            <BtnWrapper>
                                <ButtonOutluned btnTitle={title} onClick={() => {}}/>
                            </BtnWrapper>
                            <SwapButton />
                        </main>
                    </div>
                </div>
            </>
        );

}

export default TradingForm;
