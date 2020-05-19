import { FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR } from './Actions';
import { ProductInitialState } from './Types';

const initialState : ProductInitialState = {
    pending: false,
    products: [],
    error: null
}

export function baseReducer(state : ProductInitialState = initialState, action: any) {
    switch(action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case FETCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = (state : ProductInitialState) => state.products;
export const getProductsPending = (state : ProductInitialState) => state.pending;
export const getProductsError = (state : ProductInitialState) => state.error;