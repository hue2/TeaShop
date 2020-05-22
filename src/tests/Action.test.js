import * as actions from '../store/Actions';

describe('actions', () => {
    it('should create action to fetch products', () => {
        const products = [ 1, 2, 3 ];
        const expectedAction = {
            type: actions.FETCH_SUCCESS,
            products
        }

        expect(actions.fetchSuccess(products)).toEqual(expectedAction);
    });

    it('should create action to for pending', () => {
        const expectedAction = {
            type: actions.FETCH_PENDING,
        }

        expect(actions.fetchPending()).toEqual(expectedAction);
    });

    it('should create action to for error', () => {
        const error = "error 123";

        const expectedAction = {
            type: actions.FETCH_ERROR,
            error: error
        }

        expect(actions.fetchError(error)).toEqual(expectedAction);
    });
})