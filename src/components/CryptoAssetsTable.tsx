import React from "react";
import ButtonOutluned from "../components/ButtonOutluned";
import styled from "styled-components";

const Table = styled.table`

  

`;

type Props = {
  data: object[];
};

const CryptoAssetsTable = ({ data }: Props) => {
    return (
            <Table>
                <thead>
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>

                </thead>

                {data.length > 0?
                    <tbody>
                    {data.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.symbol}</td>
                                <td>{item.name}</td>
                                <td>{item.metrics.market_data.price_usd}</td>
                                <td><ButtonOutluned btnTitle={"Buy"} /></td>
                            </tr>
                    ))}
                    </tbody>
                    : null
                }



            </Table>

    );
};

export default CryptoAssetsTable;
