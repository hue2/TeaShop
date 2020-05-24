import React from 'react';
import { ProductInitialState } from '../../store/Types';
import { getProductsError, getProducts, getProductsPending } from '../../store/Reducers';
import { get } from '../../services/ApiHandler';
import { RouteComponentProps } from 'react-router-dom';
import { RouteProps } from './ProductTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteProps;

class Product extends React.Component<Props> {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <p>Product Detail</p>
            </div>
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
)(Product);