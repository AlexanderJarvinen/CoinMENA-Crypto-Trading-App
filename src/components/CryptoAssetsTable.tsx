import React from "react";
import TradeBtnOutlinedWithDropdown  from "./TradeBtnOutlinedWithDropdown";
import styled from "styled-components";
import { CoinIcon } from 'coin-icon';
import { ICON_SIZES, TYPOGRAPHY, CRYPTO_COLUMNS, TRADE_DROPDOWN_VALUES } from "../../src/constsants/constants";
import {Sort} from "../assets/icons";
import {Icon} from "./Icon";
import {AssetsResp} from "../types/serverTypes";

const CryptoIcon = styled(CoinIcon)<{ iconSize: string }>`
  position: relative;
  top: 5px;
  right: 4px;
  ${({ iconSize }) => (`width: ${iconSize} !important;`)};
  ${({ iconSize }) => (`height: ${iconSize} !important;`)};
`;

const HeaderCellIcon = styled.div`
      display: inline-block;
      position: relative;
      top: 1px;
      left: 130px;
`;

const HeaderCellIconWrapper = styled.div`
      width: 36px;
      height: 36px;
      background: #e5be01;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
  
      :hover {
        background: #ebeb00;
      }
`;


type Props = {
  data: AssetsResp[];
  sortByName: () => void;
  sortByPrice: () => void;
};

const CryptoAssetsTable = ({ data, sortByName, sortByPrice }: Props) => {
    return (
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th >
                        {CRYPTO_COLUMNS.NAME}
                        <HeaderCellIcon  onClick={sortByName}>
                            <HeaderCellIconWrapper >
                                <Icon icon={Sort} iconSize={ICON_SIZES.BTN_SIZE}/>
                            </HeaderCellIconWrapper>
                        </HeaderCellIcon>
                    </th>
                    <th >
                        {CRYPTO_COLUMNS.PRICE}
                        <HeaderCellIcon onClick={sortByPrice}>
                            <HeaderCellIconWrapper>
                                <Icon icon={Sort} iconSize={ICON_SIZES.BTN_SIZE}/>
                            </HeaderCellIconWrapper>
                        </HeaderCellIcon>
                    </th>
                    <th></th>
                </tr>

                </thead>

                {data.length > 0?
                    <tbody>
                    {data.map((item: AssetsResp) => (
                            <tr key={item.id}>
                                <td></td>
                                <td><CryptoIcon iconSize={ICON_SIZES.CELL_SIZE} code={item.symbol?.toLowerCase()} />
                                    {item.name}

                                </td>
                                <td>{item.metrics.market_data.price_usd}</td>
                                <td><TradeBtnOutlinedWithDropdown
                                    btnTitle={TYPOGRAPHY.DROPDOWN_BTN}
                                    list={TRADE_DROPDOWN_VALUES}
                                    fixWidth
                                    onSelect={() => {}}
                                /></td>
                            </tr>
                    ))}
                    </tbody>
                    : null
                }



            </table>

    );
};

export default CryptoAssetsTable;
