import React from 'react';
import { ProductInitialState } from '../../store/Types';
import { getProductsError, getProducts, getProductsPending } from '../../store/Reducers';
import { getOne } from '../../services/ApiHandler';
import { RouteProps } from './ProductTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductState } from './Types';
import { QuantitySelect } from './QuantitySelect';
import { TeaProduct } from '../../store/Types';
import './Product.scss';

type ProductProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteProps;

export class Product extends React.Component<ProductProps, ProductState> {
    state : ProductState = {
        priceId: 0,
        qtySelected: 1,
        price: 0,
        totalPrice: 0
    }


    componentDidMount() {
        this.props.getOne(this.props.match.params.id).then(() => {
            const { products } = this.props;
            if (products.length > 0) {
                this.setState({ 
                    priceId : products[0].price[0].priceId, 
                    price: products[0].price[0].price,
                    totalPrice: products[0].price[0].price
                 });
            }
        });
    }
  
    handlePriceChange = (priceId: number, price: any) => {
        let parsedPrice = parseFloat(price);
        this.setState({ 
            priceId, 
            price,
            totalPrice: isNaN(parsedPrice) ? 0 : +(this.state.qtySelected * price).toFixed(2) });
    }

    handleQtyChange = (qtySelected: number) => {
        this.setState({ 
            qtySelected, 
            totalPrice: (+this.state.price) * qtySelected 
        });
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
                            <p className="text-left">{selectedProduct.healthBenefits}</p>
                            <br />
                            <QuantitySelect quantity={selectedProduct.price} 
                                onQtyChange={this.handleQtyChange} 
                                onPriceChange={this.handlePriceChange}
                                selectedPrice={this.state.totalPrice}
                                selectedPriceId={this.state.priceId} 
                                selectedQuantity={this.state.qtySelected}
                            />
                        </div>
                        <br />
                        {/* <button onClick={}>Add to Cart</button> */}
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

const mapDispatchToProps = (dispatch : any) => ({
    getOne: (id: string) => {
        return dispatch(getOne(id));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);