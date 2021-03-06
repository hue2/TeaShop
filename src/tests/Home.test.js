import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../views/home/Home';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { get } from '../services/ApiHandler';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
    let props, store, mockStore, initialState;
    const middlewares = [thunk];

    beforeEach(() => {
        props = {
            get: jest.fn()
        };
        initialState = {
            pending: false,
            products: [],
            error: null
        }

        mockStore = configureStore(middlewares);
        store = mockStore(initialState);

    });

    it('should call componentDidMount', () => {
        let spy = jest.spyOn(Home.WrappedComponent.prototype, 'componentDidMount');
        const wrapper = mount(
            <Provider store={store}>
                <Home {...props} />
            </Provider>
        )
        expect(spy).toHaveBeenCalled();
        wrapper.unmount();
    });

});