
const MESSARI_ROOT = "https://data.messari.io";

const MESSARI_HEADER  = {
    "x-messari-api-key": "ca68a173-3cf8-472d-aa7f-9cee40919b84"
}

const CRYPTO_API_HEADER  = {
    "Content-Type": "application/json",
    "X-API-Key": "eb72cf9acde9ab70b5b21ffec5856192176290c6"
}

export const fetchAsserts = async (showAll?: boolean) => await fetch(`${MESSARI_ROOT}/api/v2/assets?${!showAll?'&limit=10': ''}`, {
        method: 'GET',
        headers: MESSARI_HEADER,
    }
).then(res => res.json()).then(messariRes => messariRes.data);
