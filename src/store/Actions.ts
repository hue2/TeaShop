import { TeaProduct } from './Types';

export const FETCH_PENDING = "GET";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_ONE_SUCCESS = "FETCH_ONE_SUCCESS";

export function fetchPending() {
    return {
        type: FETCH_PENDING
    }
}

export function fetchSuccess(products : Array<TeaProduct>) {
    return {
        type: FETCH_SUCCESS,
        products: products
    }
}

export function fetchError(error: any) {
    return {
        type: FETCH_ERROR,
        error: error
    }
}
