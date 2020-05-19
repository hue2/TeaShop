import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Home from '../views/home/Home';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        get: jest.fn()
    };

    const enzymeWrapper = shallow(<Home {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

