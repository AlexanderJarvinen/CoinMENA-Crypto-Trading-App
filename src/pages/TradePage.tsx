import React, {useEffect, useState} from "react";
import TradingForm from '../components/TradingForm';
import {ICON_SIZES, TYPOGRAPHY} from "../constsants/constants";
import {useQuery} from "react-query";
import {fetchAsserts} from "../requests/fetchRequests";
import styled from "styled-components";
import {CoinIcon} from "coin-icon";

const CryptoItemWrapper = styled.div`
    padding-left: 15px;
`

const TradePage: React.FC = () => {
    const [cryptoInfo, setCryptoInfo] = useState<any[]>([]);
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

    useEffect(() => {
        if(data) {
            const values = data.map((item:any) => {return {
                key: item.id,
                name: <CryptoItemWrapper><CryptoIcon iconSize={ICON_SIZES.CELL_SIZE} code={item.symbol?.toLowerCase()} />{item.name}</CryptoItemWrapper>,
            }});
            setCryptoInfo(values);
        }


    },[data, error]);

    return (
        <div>
            <TradingForm title={TYPOGRAPHY.EXCANGE_TITLE} list={cryptoInfo}/>
        </div>
    );
}

export default TradePage;
