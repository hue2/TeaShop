export const FETCH_PENDING = "GET";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export function fetchPending() {
    return {
        type: FETCH_PENDING
    }
}

export function fetchSuccess(products : Array<any>) {
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
