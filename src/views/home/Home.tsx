import React from 'react';
import "./Home.scss";
const teatime = require('../../assets/img/teatime.png');

export default class Home extends React.Component {
    render(){
        return (
            <>
                <div className="cover-container">
                    <img src={teatime} className="cover"/>
                    <button className="shop-now">Shop Now</button>
                </div>
                <div className="home-content">
                    <h4 className="left">Featured products</h4>
                </div>
            </>
        )
    }
}