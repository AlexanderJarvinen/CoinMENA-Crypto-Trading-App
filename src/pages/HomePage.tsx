import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import { fetchAsserts } from "../requests/fetchRequests"
import CryptoAssetsTable from "../components/CryptoAssetsTable";
import ButtonOutlined from "../components/ButtonOutluned";
import  Spinner from "../components/Spinner";
import styled from "styled-components";
import {CoinIconProvider} from "coin-icon";
import {TYPOGRAPHY} from "../constsants/constants";
import { comareByNameDESC, compareByNameASC, comareByPriceDESC, comareByPriceASC }from "../utils/sortUtils"

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

const ErrorWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 100vh;
      align-items: center;
`;



const HomePage: React.FC = () => {

    const [info, setInfo] = useState<any[]>([]);
    const [showAllAssets, setShowAllAssets] = useState<boolean>(false);
    const [sortByName, setSortByName] = useState<boolean>(false);
    const [sortByPrice, setSortByPrice] = useState<boolean>(false);
    const [errorInfo, setErrorInfo] = useState<any>(null);

    const { data, isLoading, isSuccess, isError, error }  = useQuery(['infoData', showAllAssets], () => {
        return fetchAsserts(showAllAssets);
    });

    useEffect(() => {
        if(data) {

            setInfo(data);
        }

        if(error) {

            setErrorInfo(error as any);
        }


    },[data, error]);


    const handleSortByName = () => {
        setSortByName(!sortByName)
        const sortData = info;

        if(!sortByName) {
            sortData.sort(comareByNameDESC);
        }

        if (sortByName) {
            sortData.sort(compareByNameASC);
        }
        setInfo(sortData);
    }

    const handleSortByPrice = () => {
        setSortByPrice(!sortByPrice)
        const sortData = info;

        if(!sortByPrice) {
            sortData.sort(comareByPriceDESC);
        }

        if (sortByPrice) {
            sortData.sort(comareByPriceASC);
        }
        setInfo(sortData);
    }

    return (
        <div>
            <Title>Crypto assets</Title>
            {isError?<ErrorWrapper>{errorInfo.error_message}</ErrorWrapper>:null}
            {isSuccess ?
                <BtnPanelContainer>
                    <ButtonOutlined
                        btnTitle={showAllAssets? TYPOGRAPHY.COLLAPSE_ALL_BTN : TYPOGRAPHY.SHOW_ALL_BTN}
                        onClick={() => {setShowAllAssets(!showAllAssets)}}
                        fixedWidth
                    />
                </BtnPanelContainer>
            : null }
            <AssetsContainer>
                {isSuccess ?

                        <CryptoAssetsTable data={info} sortByName={handleSortByName} sortByPrice={handleSortByPrice} />
                : null}
                {isLoading? <Spinner /> : null}
            </AssetsContainer>
        </div>
    );
}

export default HomePage;
