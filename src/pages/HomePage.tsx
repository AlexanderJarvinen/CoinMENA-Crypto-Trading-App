import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import { fetchAsserts } from "../requests/fetchRequests"
import CryptoAssetsTable from "../components/CryptoAssetsTable";
import  Spinner from "../components/Spinner";
import styled from "styled-components";
import {CoinIconProvider} from "coin-icon";

const Title = styled.h1`
     text-align: center;
     margin-top: 20px;
`;

const AssetsContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
`;

const HomePage: React.FC = () => {

    const [info, setInfo] = useState<object[]>([]);

    const { data } = useQuery('info', fetchAsserts);

    useEffect(() => {
        if(data) {
            setInfo(data);
        }


    },[data]);

    return (
        <div>
            <Title>Crypto assets</Title>
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
