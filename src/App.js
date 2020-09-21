import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Counter from './components/counter';
import Layout from './pages/layout';





function App() {
 
  return (
    <div className="container-fluid">
      <Router>
        <Layout/>
         

          <div>
            <Switch>
              <Route path="/" exact>
                <h1>Hello React</h1>
              </Route>
              <Route path="/counter">
                <Counter/>
              </Route>
            </Switch>
          </div>
      
      </Router>
    
    </div>
  );
}



export default App;
