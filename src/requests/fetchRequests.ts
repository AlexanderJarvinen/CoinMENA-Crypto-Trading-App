
const MESSARI_ROOT = "https://data.messari.io";

const MESSARI_HEADER  = {
    "x-messari-api-key": "ca68a173-3cf8-472d-aa7f-9cee40919b84"
}

export const fetchAsserts = async (showAll: boolean) => await fetch(`${MESSARI_ROOT}/api/v2/assets?${!showAll?'&limit=10': ''}`, {
        method: 'GET',
        headers: MESSARI_HEADER,
    }
).then(res => res.json()).then(messariRes => messariRes.data);
