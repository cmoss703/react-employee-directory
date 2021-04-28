import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => {

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3"><b>Employee Directory</b></h1>
          <h2 className="lead">Sort or search for an employee by name</h2>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div id="navbar" className="input-group mb-3">
          <input
            id="search"
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for an Employee.."
            value={props.search}
            onChange={props.handleInputChange}>
          </input>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;