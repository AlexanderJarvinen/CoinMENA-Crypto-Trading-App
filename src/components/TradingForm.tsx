
import React from "react";
import Input from "./Input";
import ButtonOutluned from "./ButtonOutluned";
import TradeBtnOutlinedWithDropdown from "./TradeBtnOutlinedWithDropdown";
import SwapButton from "./SwapButton";
import styled from "styled-components";
import { TYPOGRAPHY } from "../constsants/constants";

const BtnWrapper = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;
`;

const CryptoCurrencyCombobox= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  top: -74px;
  right: 8px;
`;


type Props = {
    title: string;
    list: any[];
};

const TradingForm = ({ title, list }:Props) => {
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
                                    type={ "text"}
                                    value={""}
                                    onChange={(e) => (e)}
                                />
                            <CryptoCurrencyCombobox>
                                <TradeBtnOutlinedWithDropdown title={TYPOGRAPHY.CHOOSE_CRYPTO_CURRENCY} list={list} />
                            </CryptoCurrencyCombobox>

                            <Input
                                type={ "text"}
                                value={""}
                                onChange={(e) => (e)}
                            />
                            <BtnWrapper>
                                <ButtonOutluned btnTitle={title}/>
                            </BtnWrapper>
                            <SwapButton />
                        </main>
                    </div>
                </div>
            </>
        );

}

export default TradingForm;
