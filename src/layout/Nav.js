import React from 'react';
import { NavLogo, NavList, NavItem } from '../styled-components/Nav.styles';
import { FlexDiv } from '../styled-components/Common.styles';
import ImgUrl from '../assets/img/Tealogo.png';

export default class Nav extends React.PureComponent {
    render() {
        return (
            <FlexDiv>
                <div>
                    <NavLogo src={ImgUrl}></NavLogo>
                </div>
                <div className="p-10 align-s-center">
                    <NavList>
                        <NavItem>Home</NavItem>
                        <NavItem>Shop</NavItem>
                        <NavItem>Cart</NavItem>
                    </NavList>
                </div>
            </FlexDiv>
        )
    }
}