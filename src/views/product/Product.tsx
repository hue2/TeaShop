import React from 'react';
import { ProductInitialState } from '../../store/Types';
import { getProductsError, getProducts, getProductsPending } from '../../store/Reducers';
import { getOne } from '../../services/ApiHandler';
import { RouteProps } from './ProductTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteProps;

class Product extends React.Component<Props> {
    componentDidMount() {
        const { getOne } = this.props;
        getOne(this.props.match.params.id);
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
                        </div>                 
                    </div>
                )}
                {
                    <select>
                        {selectedProduct && selectedProduct.price.map(item => (
                            <option value={item.priceId} key={item.priceId}>
                                {item.quantity}
                            </option>

                        ))}
                    </select>             
                }
                {/* <div className="more-btn">
                    <NavLink to={`/product/${products[randomItem].id}`} activeClassName="selected">
                        More
                    </NavLink>
                </div> */}
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