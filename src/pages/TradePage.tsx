import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import TradingForm from '../components/TradingForm';
import {ICON_SIZES, TYPOGRAPHY} from "../../src/constsants/constants";
import {useQuery} from "react-query";
import {fetchAsserts} from "../requests/fetchRequests";
import styled from "styled-components";
import {CoinIcon} from "coin-icon";
import {AppContext} from "../context/AppContextProvider";
import Spinner from "../components/Spinner";
import {ArrowDown} from "../assets/icons";

const CryptoItemWrapper = styled.div`
    padding-left: 15px;
`

const CryptoBtnWrapper = styled.div`
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PLACEHOLDER = '0.00';

const TradePage: React.FC = () => {
    const [cryptoInfo, setCryptoInfo] = useState<any[]>([]);
    const [cryptoDropdownBtn, setCryptoDropdownBtn] = useState<any>(null);
    const [cryptoAmount, setCryptoAmount] = useState<string>("");

    const { chooseCurrency, currency} = useContext(AppContext);

    const { data, isLoading, isSuccess, isError, error }  = useQuery(['cryptoData'], () => {
        return fetchAsserts(true);
    });

        const CryptoIcon = styled(CoinIcon)<{ iconSize: string }>`
          position: relative;
          top: 5px;
          right: 4px;
          ${({ iconSize }) => (`width: ${iconSize} !important;`)};
          ${({ iconSize }) => (`height: ${iconSize} !important;`)};
        `;

        const CryptoIconBtn = styled(CoinIcon)<{ iconSize: string }>`
          ${({ iconSize }) => (`width: ${iconSize} !important;`)};
          ${({ iconSize }) => (`height: ${iconSize} !important;`)};
          margin-right: 5px;
          background-color: white;
        `

    useEffect(() => {
        if(isSuccess) {
            const values = data.map((item:any) => {return {
                key: item.id,
                showName: <CryptoItemWrapper><CryptoIcon  iconSize={ICON_SIZES.CELL_SIZE} code={item.symbol?.toLowerCase()} />{item.name}</CryptoItemWrapper>,
                name: item.name,
                value: item.symbol
            }});

                setCryptoDropdownBtn(<CryptoBtnWrapper><CryptoIconBtn iconSize={ICON_SIZES.BTN_SIZE} code={data[0]?.symbol?.toLowerCase()} />{data[0]?.name}</CryptoBtnWrapper>);


            setCryptoInfo(values);
        }


    },[data, error]);

        useEffect(() => {
            if(isSuccess && currency) {
                setCryptoDropdownBtn(<CryptoBtnWrapper><CryptoIconBtn iconSize={ICON_SIZES.BTN_SIZE} code={currency?.symbol?.toLowerCase()} />{currency?.name}</CryptoBtnWrapper>);
            }

        },[currency]);

    const handleChangeCryptoAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setCryptoAmount(e.target.value);
    }

    return (
        <div>
            {isSuccess?
                <TradingForm
                    title={TYPOGRAPHY.CHOOSE_CRYPTO_CURRENCY}
                    list={cryptoInfo}
                    chooseCurrency={chooseCurrency}
                    btnTitle={cryptoDropdownBtn}
                    icon={ArrowDown}
                    cryptoAmount={cryptoAmount}
                    placeholder={PLACEHOLDER}
                    onChange={handleChangeCryptoAmount}
                />
            : null}
            {isLoading? <Spinner /> : null}
        </div>
    );
}

export default TradePage;
