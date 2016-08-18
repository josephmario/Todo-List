import React, {Component} from 'react';

export default class Body extends Component{
  render()
  {
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3 jumbotron text-center todoContainer">
          <h1>Todo List</h1>
          <input type="text" className="form-control" placeholder="Enter Task.." />
          <br/>
          <button type="button" className="btn btn-success">Add</button>
        </div>

        <div className="col-md-6 col-md-offset-3 jumbotron  listContainer">
          <ul className="list-group">
            <li className="list-group-item"><input type="checkbox"  /> HTML Template</li>
            <li className="list-group-item"><input type="checkbox" /> Convert to React</li>
            <li className="list-group-item"><input type="checkbox" /> Stateful and Stateless components</li>
            <li className="list-group-item"><input type="checkbox" /> Routing components</li>
            <li className="list-group-item"><input type="checkbox" /> Push to Github</li>
          </ul>
          <div className="text-center">
            <button className="btn btn-default" type="button">All</button>
            <button className="btn btn-default" type="button">Active</button>
            <button className="btn btn-default" type="button">Completed</button>
          </div>
        </div>
      </div>
    );
  }
}
