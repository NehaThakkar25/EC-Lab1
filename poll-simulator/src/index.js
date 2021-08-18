import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Add from './pages/add/Add'
import Vote from './pages/vote/Vote'
import Winner from './pages/winner/Winner'
import Result from './pages/result/Result'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/winner">
            <Winner />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
