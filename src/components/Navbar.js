import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbar" className="input-group mb-3">
        <input
          id="search"
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for an Employee.."
          value={props.search}
          onChange={props.handleInputChange}>
        </input>
      </div>
    </nav >
  );
}

export default Navbar;