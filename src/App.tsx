import React from 'react';
import './App.scss';
import './Common.scss';
import Nav from './views/layout/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import Home from './views/home/Home';
import Product from './views/product/Product';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <div className="App">
          <Nav />
        </div>
      </Router>

    );
  }
}