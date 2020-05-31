import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Product } from '../views/product/Product';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import { QuantitySelect } from '../views/product/QuantitySelect';

Enzyme.configure({ adapter: new Adapter() });

describe('Product Component', () => {
    let props, store, mockStore, initialState, wrapper;
    const middlewares = [thunk];

    beforeEach(() => {
        props = {
            getOne: jest.fn(),
            match: {
                params: {
                    id: 1
                }
            },
            products: [
                { price: [ {priceId: 1, quantity: 2 } ]} 
            ]
        };

        mockStore = configureStore(middlewares);
        store = mockStore();
    });

    it('should call getOne in componentDidMount', () => {
        wrapper = shallow(<Product {...props} />);
        expect(props.getOne).toHaveBeenCalledTimes(1);
    });

    it('should find QuantitySelect in component', () => {
        wrapper = mount(<Product {...props} />);
        expect(wrapper.find(QuantitySelect).length === 1);
    });
})