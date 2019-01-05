import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPage from './PageAboutMe/page';

import {Switch, Route} from 'react-router-dom';
import NotFoundPage from './NotFound/notfound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MyPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
