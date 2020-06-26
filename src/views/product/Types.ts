import { QuantityPrice } from '../../store/Types';

export interface QuantityProps {
    quantity: Array<QuantityPrice>;
    selectedPrice: string | number,
    selectedQuantity: number,
    selectedPriceId: number,
    onPriceChange: (priceId: number, price: any) => void;
    onQtyChange: (qtySelected: number) => void;
}

export interface ProductState {
    priceId: number,
    qtySelected: number,
    price: any,
    totalPrice: number,
}
