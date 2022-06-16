import React from "react";
import TradeBtnOutlinedWithDropdown  from "./TradeBtnOutlinedWithDropdown";
import styled from "styled-components";
import { CoinIcon } from 'coin-icon';
import { ICON_SIZES, TYPOGRAPHY } from "../constsants/constants";

const CryptoIcon = styled(CoinIcon)<{ iconSize: string }>`
  position: relative;
  top: 5px;
  right: 4px;
  ${({ iconSize }) => (`width: ${iconSize} !important;`)};
  ${({ iconSize }) => (`height: ${iconSize} !important;`)};
`;

type Props = {
  data: object[];
};

const CryptoAssetsTable = ({ data }: Props) => {
    return (
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>

                </thead>

                {data.length > 0?
                    <tbody>
                    {data.map((item: any) => (
                            <tr key={item.id}>
                                <td></td>
                                <td><CryptoIcon iconSize={ICON_SIZES.CELL_SIZE} code={item.symbol.toLowerCase()} />{item.name}</td>
                                <td>{item.metrics.market_data.price_usd}</td>
                                <td><TradeBtnOutlinedWithDropdown  title={TYPOGRAPHY.DROPDOWN_BTN} /></td>
                            </tr>
                    ))}
                    </tbody>
                    : null
                }



            </table>

    );
};

export default CryptoAssetsTable;
