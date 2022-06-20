
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
    chooseCurrencyBtnTitle: ReactElement<any, any> ;
    exchangeBtnTitle: string;
    icon: any;
    cryptoAmount: string;
    fiatAmount: string;
    placeholder: string
    onChange: (e: any) => void;
    swapFields: () => void;
    swapFlag: boolean;
};

const TradingForm = ({
                         title,
                         list,
                         chooseCurrency,
                         chooseCurrencyBtnTitle,
                         icon,
                         cryptoAmount,
                         fiatAmount,
                         onChange,
                         placeholder,
                         exchangeBtnTitle,
                         swapFields,
                         swapFlag
        }:Props) => {
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
                                type={ "number"}
                                value={fiatAmount}
                                onChange={(e) => (e)}
                                placeholder={placeholder}
                            />
                            <CryptoCurrencyCombobox>
                                <TradeBtnOutlinedWithDropdown
                                    btnTitle={chooseCurrencyBtnTitle}
                                    list={list}
                                    onSelect={chooseCurrency}
                                    icon={icon}
                                    fixWidth
                                    fixHeight
                                />
                            </CryptoCurrencyCombobox>
                            <BtnWrapper>
                                <ButtonOutluned active={swapFlag} btnTitle={exchangeBtnTitle} onClick={swapFields}/>
                            </BtnWrapper>
                            <SwapButton switchOn={swapFlag} />
                        </main>
                    </div>
                </div>
            </>
        );

}

export default TradingForm;
