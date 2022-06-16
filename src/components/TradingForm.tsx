
import React from "react";
import Input from "./Input";
import ButtonOutluned from "./ButtonOutluned";
import SwapButton from "./SwapButton";
import styled from "styled-components";

const BtnWrapper = styled.div`
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;
`;


type Props = {
    title: string;
};

const TradingForm = ({ title }:Props) => {
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
