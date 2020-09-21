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
import MultipleStateUpdate from './components/stateupdate-multiple';
import MultipleStatePropsUpdate from './components/state-multiple-props-update';
import UseEffectDemo from './components/useeffect-demo';
import  '@fortawesome/fontawesome-free/css/all.css';
import Todo from './pages/todo';





function App() {
 
  return (
    <div className="container-fluid">
      <Router>
        <Layout/>
         

          <div>
            <Switch>
              <Route path="/" exact>
                <div className="jumbotron jumbotron-fluid">
                <h1 class="text-center display-4">Hello React</h1>
                </div>
                
              </Route>
              <Route path="/counter">
                <Counter/>
              </Route>
              <Route path="/todo">
                <Todo/>
              </Route>
              <Route path="/multiple-state-update">
                <MultipleStateUpdate/>
              </Route>
              <Route path="/multiple-state-update-props">
                <MultipleStatePropsUpdate/>
              </Route>
              <Route path="/use-effect-demo">
                <UseEffectDemo/>
              </Route>
            </Switch>
          </div>
      
      </Router>
    
    </div>
  );
}



export default App;
