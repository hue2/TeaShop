import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Common.css';
import { render } from '@testing-library/react';
import Nav from './layout/Nav';

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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}