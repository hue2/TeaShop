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
    price: number,
}