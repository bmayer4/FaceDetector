import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
import Signin from './components/Signin/Signin';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Register from './components/Register/Register';
import PublicRoute from './hoc/PublicRoute';
import PrivateRoute from './hoc/PrivateRoute';


class App extends Component {
  render() {
      return (
          <div>
          <BrowserRouter>
          <Switch>
          <PrivateRoute path="/" component={Home} exact={true}/>
          <PrivateRoute path="/profile" component={Profile} />
          <PublicRoute path="/register" exact component={Register}/>
          <PublicRoute path="/signin" exact component={Signin}/>
          <Route component={NotFoundPage} />
          </Switch>  
          </BrowserRouter>
          </div>
      );
  }
}

export default App;






