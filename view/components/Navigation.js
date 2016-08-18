import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
  return (
  <header>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">ToDo-List System</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">All</a></li>
            <li><a href="#">Active</a></li>
            <li><Link to="complete">Completed</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}
}
