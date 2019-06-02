export declare type ValidItemType = 'inapp' | 'subs';
export interface QueryResponse {
    responseCode: number;
    results: Array<Purchase | ItemDetails>;
}
export interface Purchase {
    acknowledged: boolean;
    orderId: string;
    productId: string;
    purchaseState: number;
    purchaseTime: number;
    packageName: string;
    purchaseToken?: string;
    transactionReceipt?: string;
}
export interface ItemDetails {
    description: string;
    price: string;
    price_amount_micros: number;
    price_currency_code: string;
    productId: string;
    title: string;
    type: ValidItemType;
    subscriptionPeriod?: string;
    skuDetailsToken?: string;
}
