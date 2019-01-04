import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPage from './PageAboutMe/page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyPage />
      </div>
    );
  }
}

export default App;
