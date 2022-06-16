import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import { fetchAsserts } from "../requests/fetchRequests"
import CryptoAssetsTable from "../components/CryptoAssetsTable";
import ButtonOutlined from "../components/ButtonOutluned";
import  Spinner from "../components/Spinner";
import styled from "styled-components";
import {CoinIconProvider} from "coin-icon";
import {TYPOGRAPHY} from "../constsants/constants";

const Title = styled.h1`
     text-align: center;
     margin-top: 20px;
`;

const AssetsContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
`;

const BtnPanelContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     width: 60vw;
     margin: 0 auto;
`;

const HomePage: React.FC = () => {

    const [info, setInfo] = useState<object[]>([]);
    const [showAllAssets, setShowAllAssets] = useState<boolean>(false);

    const { data }  = useQuery(['info', showAllAssets], () => {
        return fetchAsserts(showAllAssets);
    });

    useEffect(() => {
        if(data) {

            setInfo(data);
        }


    },[data]);

    return (
        <div>
            <Title>Crypto assets</Title>
            <BtnPanelContainer>
                <ButtonOutlined
                    btnTitle={showAllAssets? TYPOGRAPHY.COLLAPSE_ALL_BTN : TYPOGRAPHY.SHOW_ALL_BTN}
                    onClick={() => {setShowAllAssets(!showAllAssets)}}
                    fixedWidth
                />
            </BtnPanelContainer>
            <AssetsContainer>
                {info.length > 0 ?
                    <CoinIconProvider folderPath="images/svg">
                        <CryptoAssetsTable data={info} />
                    </CoinIconProvider>
                : <Spinner />}
            </AssetsContainer>
        </div>
    );
}

export default HomePage;
