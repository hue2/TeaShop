import { QuantityPrice } from '../../store/Types';

export interface QuantityProps {
    quantity: Array<QuantityPrice>;
    handleChange: () => {};
}

export interface ProductState {
    priceId: number,
    qtySelected: number,
}