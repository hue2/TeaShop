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
            handleQtyChange: jest.fn(),
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
        props.getOne.mockImplementationOnce(() => Promise.resolve(true));
        wrapper = mount(<Product {...props} />);
    });

    it('should call getOne in componentDidMount', () => {
        wrapper = shallow(<Product {...props} />);
        expect(props.getOne).toHaveBeenCalledTimes(1);
    });

    it('should find QuantitySelect in component', () => {
        expect(wrapper.find(QuantitySelect).length === 1);
    });

    it('should call handleQtyChange when quantity is updated', () => {
        wrapper.instance().handleQtyChange = jest.fn();
        wrapper.instance().forceUpdate();

        wrapper.find(QuantitySelect).find(".qty-selector").simulate('change',  { target: { value : 1}});
        expect(wrapper.instance().handleQtyChange).toHaveBeenCalledTimes(1);
    });

    it('should call handlePriceChange when quantity is updated', () => {
        const getAttribute = jest.fn();
        const selectedOptions = [
            { name: 'amount', value: 1 }
        ]
        const options = [{ priceId: 1, price: 2, quantity: 3 }, { priceId: 2, price: 3, quantity: 4 } ];
        wrapper.instance().handlePriceChange = jest.fn();
        wrapper.setProps({ quantity: options });
        getAttribute.mockReturnValueOnce(1);

        wrapper.instance().forceUpdate();
        wrapper.find(QuantitySelect).find(".amt-selector").simulate('change',  
            { target: { name: selectedOptions[0].name, value : 1, 'data-price': 2, getAttribute }});
        expect(wrapper.instance().handlePriceChange).toHaveBeenCalledTimes(1);
    });
})