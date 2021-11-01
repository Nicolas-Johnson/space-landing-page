import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Destination from './pages/Destination';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/crew" component={ Crew } />
        <Route path="/technology" component={ Technology } />
        <Route path="/destination" component={ Destination } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
