import React from 'react';
import { connect } from 'react-redux';
import { getProductsError, getProducts, getProductsPending } from '../../store/Reducers';
import { ProductInitialState } from '../../store/Types';
import { get } from '../../services/ApiHandler';
import { bindActionCreators } from 'redux';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Shop extends React.Component {
    render() {
        return (
            <div>Under construction :(</div>
        )
    }
}

const mapStateToProps = (state : ProductInitialState) => ({
    pending: getProductsPending(state),
    products: getProducts(state),
    error: getProductsError(state),
});

const mapDispatchToProps = (dispatch : any) => bindActionCreators({
    get: get 
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);