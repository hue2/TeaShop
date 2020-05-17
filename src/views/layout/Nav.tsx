import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Common.scss';
import './Nav.scss';
const logo = require('../../assets/img/logo.png');

export default class Nav extends React.PureComponent {
    render() {
        return (
            <div className="nav">
                <div className="flex nav-panel" >
                    <div>
                        <input className="search" placeholder="Search"></input><FontAwesomeIcon icon="search" className="nav-icon"></FontAwesomeIcon>
                    </div>
                    <div className="p-10 align-s-center m-left-auto">
                        <ul className="nav-ul">
                            <li className="nav-li">
                                <FontAwesomeIcon icon="home" className="nav-icon"></FontAwesomeIcon> Home
                            </li>
                            <li className="nav-li">
                                <FontAwesomeIcon icon="coffee" className="nav-icon"></FontAwesomeIcon> Shop
                            </li>
                            <li className="nav-li">
                                <FontAwesomeIcon icon="shopping-cart" className="nav-icon"></FontAwesomeIcon> Cart
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="title-container">
                    <img className="logo" src={logo}></img>
                    <h2>Tea Cottage</h2>     
                </div>
                <div className="options">
                        <ul>
                            <li>Black Tea</li>
                            <li>Green Tea</li>
                            <li>Herbal</li>
                            <li className="sale">Sale</li>
                        </ul>    
                </div>   
            </div>
        )
    }
}