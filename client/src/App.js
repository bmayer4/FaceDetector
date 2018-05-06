import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import PublicRoute from './hoc/PublicRoute';
import PrivateRoute from './hoc/PrivateRoute';


class App extends Component {
  render() {
      return (
          <BrowserRouter>
          <Switch>  
          <PrivateRoute path="/" component={Home} exact={true}/>
          <PublicRoute path="/register" exact component={Register}/>
          <PublicRoute path="/signin" exact component={Signin}/>
          </Switch>  
          </BrowserRouter>
      );
  }
}

export default App;






