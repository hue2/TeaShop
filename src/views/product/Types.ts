import { QuantityPrice } from '../../store/Types';

export interface QuantityProps {
    quantity: Array<QuantityPrice>;
    onChange: (event: any) => void;
}

export interface ProductState {
    priceId: number,
    qtySelected: number,
}