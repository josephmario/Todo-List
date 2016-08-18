import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Route } from 'react-router';
import Todolist from './components/TodoList';
import Body from './components/Body';
import Complete from './components/Complete';

// import routes from './routes';

render(<Router history={browserHistory}>
  <Route path="/" component={Todolist}/>
  <Route path="body" component={Body} />
  <Route path="complete" component={Complete} />
  </Router>
  , document.getElementById('TodoList'));
