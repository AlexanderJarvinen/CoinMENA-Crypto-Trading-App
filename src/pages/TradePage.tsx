import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import TradingForm from '../components/TradingForm';
import {ICON_SIZES, TYPOGRAPHY} from "../../src/constsants/constants";
import {useQuery} from "react-query";
import {fetchAsserts, fetchRates} from "../requests/fetchRequests";
import styled from "styled-components";
import {CoinIcon} from "coin-icon";
import {AppContext} from "../context/AppContextProvider";
import Spinner from "../components/Spinner";
import {ArrowDown} from "../assets/icons";
import * as console from "console";

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
    const [cryptoAmount, setCryptoAmount] = useState<string | undefined>();
    const [fiatAmount, setFiatAmount] = useState<string | undefined>();
    const [swapFields, setSwapFields] = useState<boolean>(false);

    const { chooseCurrency, currency} = useContext(AppContext);

    const assertsResponse  = useQuery(['cryptoData'], () => {
        return fetchAsserts(true);
    });

    const ratesResponse  = useQuery(['cryptoRates', cryptoAmount, fiatAmount, currency, swapFields], () => {
        return currency && (cryptoAmount || fiatAmount )? fetchRates( currency?.symbol?.toUpperCase(), Number(cryptoAmount), Number(fiatAmount), swapFields) : null;
    }, {enabled: assertsResponse.isSuccess}  );

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
        if(assertsResponse.isSuccess) {
            const data = assertsResponse.data;
            const values = data.map((item:any) => {return {
                key: item.id,
                showName: <CryptoItemWrapper><CryptoIcon  iconSize={ICON_SIZES.CELL_SIZE} code={item.symbol?.toLowerCase()} />{item.name}</CryptoItemWrapper>,
                name: item.name,
                value: item.symbol
            }});

                setCryptoDropdownBtn(<CryptoBtnWrapper><CryptoIconBtn iconSize={ICON_SIZES.BTN_SIZE} code={data[0]?.symbol?.toLowerCase()} />{data[0]?.name}</CryptoBtnWrapper>);


            setCryptoInfo(values);

           if(!currency) {
               chooseCurrency({name: data[0].name, symbol: data[0].symbol})
           }
        }

    },[assertsResponse.data]);

        useEffect(() => {
            if(assertsResponse.isSuccess && currency) {
                setCryptoDropdownBtn(<CryptoBtnWrapper><CryptoIconBtn iconSize={ICON_SIZES.BTN_SIZE} code={currency?.symbol?.toLowerCase()} />{currency?.name}</CryptoBtnWrapper>);
            }

        },[currency]);

        useEffect(() => {

            if(ratesResponse.isSuccess) {
                if(swapFields) {
                    setCryptoAmount(ratesResponse.data as string)
                } else {
                    setFiatAmount(ratesResponse.data as string);
                }

                if(ratesResponse.isSuccess && !ratesResponse.data && cryptoAmount && fiatAmount) {
                            setCryptoAmount("");
                            setFiatAmount("");
                   }

            }
        },[ratesResponse]);


    const handleChangeCryptoAmount = (e: ChangeEvent<HTMLInputElement>) => {
            setCryptoAmount(e.target.value);
    }

    const handleChangeFiatAmount = (e: ChangeEvent<HTMLInputElement>) => {
            setFiatAmount(e.target.value);
    }

    const handleSwapFields = () => {
        setSwapFields(!swapFields);
    }

    return (
        <div>
            {assertsResponse.isSuccess?
                <TradingForm
                    title={TYPOGRAPHY.EXCANGE_TITLE}
                    list={cryptoInfo}
                    chooseCurrency={chooseCurrency}
                    chooseCurrencyBtnTitle={cryptoDropdownBtn}
                    exchangeBtnTitle={TYPOGRAPHY.SWAP_TITLE}
                    icon={ArrowDown}
                    cryptoAmount={cryptoAmount}
                    fiatAmount={fiatAmount}
                    placeholder={PLACEHOLDER}
                    onCryptoChange={handleChangeCryptoAmount}
                    onFiatChange={handleChangeFiatAmount}
                    swapFields={handleSwapFields}
                    swapFlag={swapFields}
                    noRates = {(typeof cryptoAmount !== 'undefined' && typeof fiatAmount !== 'undefined') && (!cryptoAmount || !fiatAmount)}
                />
            : null}
            {assertsResponse.isLoading? <Spinner /> : null}
        </div>
    );
}

export default TradePage;
