import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../store/Actions';
import fetchMock from 'fetch-mock';
import * as service from '../services/ApiHandler';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const apiUrl = process.env.REACT_APP_GET_API;

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates FETCH_SUCCESS when fetching has been done', () => {
        const url = `${apiUrl}/get.php`;
        fetchMock.getOnce(url, {
            headers: { 'content-type': 'application/json' },
            body: { products: [1, 2, 3] },
        })

        const expectedActions = [
            { type: actions.FETCH_PENDING },
            { type: actions.FETCH_SUCCESS,  products: { products: [1, 2, 3] }  }
        ]

        const store = mockStore({ products: [] });

        return store.dispatch(service.get()).then(() => {
             expect(fetchMock.lastUrl()).toEqual(url)
             expect(store.getActions()).toEqual(expectedActions);
        })
    })
})
 