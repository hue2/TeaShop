import React from 'react';
import { connect } from 'react-redux';
import { getProductsError, getProducts, getProductsPending } from '../../store/Reducers';
import { NavLink } from 'react-router-dom';
import { ProductInitialState } from '../../store/Types';
import { get, getFeature } from '../../services/ApiHandler';
import "./Home.scss";
import { bindActionCreators } from 'redux';

const teatime = require('../../assets/img/teatime.png');

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Home extends React.Component<Props> {
    componentDidMount() {
        const { getFeature } = this.props;
        getFeature();
    }

    render() {
        const { products } = this.props;
        let randomItem = Math.floor(Math.random() * 3);
        return (
            <>
                <div>
                    <div className="cover-container">
                        <img src={teatime} className="cover"/>
                        <button className="shop-now">Shop Now</button>
                    </div>
                    <div className="home-content">
                        <h4 className="left">Featured products</h4>
                    </div>
                    <hr className="line" />
                    <div className="feature-container">
                        {products && products.length > 0 && products.map(item => 
                            <div className="product-container" key={`${item.id}`}>
                                <a href={`/product/${item.id}`}>
                                    <img className="product" src={item.imageUrl} />
                                </a>
                                <p>{item.name}</p>
                            </div>
                        )}
                        <br />
                    </div>
                    {/* <div className="more-btn">
                        <button>More</button>
                    </div> */}
                </div>
                <hr className="line" />
                {products[randomItem] && products[randomItem].id &&
                    <div>
                        <div className="feature-container">
                            <div className="product-container">
                                <img className="product width-15" src={products[randomItem].imageUrl} />
                            </div> 
                            <div className="product-container width-50">
                                <p className="text-left dark-green">{products[randomItem].name}</p>
                                <br/>
                                <p className="text-left">{products[randomItem].description}</p>
                            </div>                  
                        </div>
                        <div className="more-btn">
                            <a href={`/product/${products[randomItem].id}`}>
                                More
                            </a>
                        </div>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = (state : ProductInitialState) => ({
    pending: getProductsPending(state),
    products: getProducts(state),
    error: getProductsError(state),
});

const mapDispatchToProps = (dispatch : any) => bindActionCreators({
    getFeature: getFeature
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);