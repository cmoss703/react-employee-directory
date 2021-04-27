import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbar" className="input-group mb-3">
        <input
          id="employee"
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for an Employee.."
          value={props.search}
          onChange={props.handleInputChange}>
        </input>
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </nav >
  );
}

export default Navbar;