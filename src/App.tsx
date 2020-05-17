import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Common.scss';
import { render } from '@testing-library/react';
import Nav from './views/layout/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import Home from './views/home/Home';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faHome, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee, faHome, faShoppingCart, faSearch);

export default class App extends React.Component {
  // componentDidMount() {
  //   fetch(process.env.REACT_APP_GET_API).then(response => {
  //     return response.json();
  //   }).then(data => {
  //     console.log(data);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}