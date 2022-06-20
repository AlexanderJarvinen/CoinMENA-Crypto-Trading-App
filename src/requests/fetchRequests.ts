import { MESSARI_ROOT, EXCHANGERATE_ROOT, MESSARI_HEADER } from "../constsants/constants";

export const fetchAsserts = async (showAll?: boolean) => await fetch(`${MESSARI_ROOT}/api/v2/assets?${!showAll?'&limit=10': ''}`, {
        method: 'GET',
        headers: MESSARI_HEADER,
    }
).then(res => res.json()).then(messariRes => messariRes.data);

export const fetchRates = async (currencySym: string | undefined, cryptoAmount: number, fiatAmount: number, swapFields: boolean) => await fetch(`${EXCHANGERATE_ROOT}/convert?${swapFields? `from=USD&to=${currencySym}`:`from=${currencySym}&to=USD`}&amount=${swapFields? fiatAmount : cryptoAmount}`, {
        method: 'GET',
    }
).then(res => res.json()).then(exchangerate => exchangerate.result);
