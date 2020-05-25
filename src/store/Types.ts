export interface ProductInitialState {
    pending: boolean;
    products: Array<TeaProduct>;
    error: any;
}

export interface TeaProduct {
    description: string,
    healthBenefits: string,
    id: number,
    imageUrl: string,
    name: string,
    price: Array<QuantityPrice>,
}

export interface QuantityPrice {
    priceId: number,
    quantity: string,
    price: number,
}