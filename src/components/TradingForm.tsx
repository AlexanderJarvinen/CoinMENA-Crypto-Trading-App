
import React, {ChangeEvent, ChangeEventHandler, ReactElement} from "react";
import Input from "./Input";
import ButtonOutluned from "./ButtonOutluned";
import TradeBtnOutlinedWithDropdown from "./TradeBtnOutlinedWithDropdown";
import SwapButton from "./SwapButton";
import styled from "styled-components";
import { TYPOGRAPHY } from "../../src/constsants/constants";
import {Simulate} from "react-dom/test-utils";
import {CurrencyType, DropdownListValue} from "../types/componentsTypes";

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

const NoRatesNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  color: #a52019;
  background-color: #ff6666;
  align-items: center;
  border-radius: 10px;
  position: relative;
  top: -145px;
`;


type Props = {
    title: string;
    list: DropdownListValue[];
    chooseCurrency: (currency: CurrencyType) => void;
    chooseCurrencyBtnTitle: ReactElement<ReactElement, string> | null ;
    exchangeBtnTitle: string;
    icon: string;
    cryptoAmount?: string;
    fiatAmount?: string;
    placeholder: string;
    onCryptoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFiatChange: (e: ChangeEvent<HTMLInputElement>) => void;
    swapFields: () => void;
    swapFlag: boolean;
    noRates: boolean;
};

const FIELD_TYPE = 'text';

const TradingForm = ({
                         title,
                         list,
                         chooseCurrency,
                         chooseCurrencyBtnTitle,
                         icon,
                         cryptoAmount,
                         fiatAmount,
                         onCryptoChange,
                         onFiatChange,
                         placeholder,
                         exchangeBtnTitle,
                         swapFields,
                         swapFlag,
                         noRates,
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
                                    type={ FIELD_TYPE}
                                    value={cryptoAmount}
                                    onChange={onCryptoChange}
                                    placeholder={placeholder}
                                    disabled={swapFlag}
                                />


                            <Input
                                type={ FIELD_TYPE}
                                value={fiatAmount}
                                onChange={onFiatChange}
                                placeholder={placeholder}
                                disabled={!swapFlag}
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
                            { noRates ?
                                <NoRatesNote>No available rates!</NoRatesNote>
                                : null
                            }
                        </main>
                    </div>
                </div>
            </>
        );

}

export default TradingForm;
