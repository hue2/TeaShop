import React from 'react';
import { ProductInitialState } from '../../store/Types';
import { getProductsError, getProducts, getProductsPending } from '../../store/Reducers';
import { getOne } from '../../services/ApiHandler';
import { RouteProps } from './ProductTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductState } from './Types';
import { QuantitySelect } from './QuantitySelect';
import './Product.scss';

type ProductProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteProps;

export class Product extends React.Component<ProductProps, ProductState> {
    componentDidMount() {
        console.log("product is called")
        const { getOne } = this.props;
        getOne(this.props.match.params.id);
    }

    handleChange = (event: any) => {

    }

    render() {
        const { products } = this.props;
        const selectedProduct = products[0];
        return (
            <div>
                {selectedProduct && (
                    <div className="feature-container">
                        <div className="product-container">
                            <img className="product width-15" src={selectedProduct.imageUrl} />
                        </div> 
                        <div className="product-container width-50">
                            <p className="text-left dark-green">{selectedProduct.name}</p>
                            <br/>
                            <p className="text-left">{selectedProduct.description}</p>
                            <br />
                            <QuantitySelect quantity={selectedProduct.price} onChange={this.handleChange} />
                        </div>
                    </div>
                )}
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
    getOne: getOne 
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);