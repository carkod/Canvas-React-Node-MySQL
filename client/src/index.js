import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './components/Search'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'


ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}> </Route>
      <Route path='/search' component={App}>
        <IndexRoute component={Search}/>
      </Route>
    </Router>,
    document.getElementById('root')
);
