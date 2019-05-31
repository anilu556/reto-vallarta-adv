import React from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Bookings from './components/Bookings';
import Confirmation from './components/Confirmation';
import history from './components/history';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/bookings/:user" component={Bookings} />
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </Router>  
      </React.Fragment> 
    );
  }  
}

export default App;
