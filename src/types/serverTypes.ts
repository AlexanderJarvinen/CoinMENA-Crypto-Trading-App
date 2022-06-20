export type AssetsResp =
    {
        id: string;
        symbol: string;
        name: string;
        slug: string;
        profile: any;
        metrics: any;
    };

export type AssetsError = {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
}
