import React, { Component } from "react";
import API from "../utils/API";
// import Container from "../components/Container";
import Navbar from "./Navbar";
// import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    results: [],
    order: ""
  };

  // When the component mounts, get a list of all available base employees and update this.state.employees
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ results: res.data.results, search: "" }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    event.preventDefault();
    if (event.target.name === "search") {
      const searchEmp = event.target.value.toLowerCase();
      this.setState({
        search: searchEmp
      })
    }
  };

  sortFirst = () => {
    const sortedEmp = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.order === "DESC") {
      sortedEmp.reverse();
      this.setState({ order: "ASC" });
    } else {
      this.setState({ order: "DESC" });
    }
    this.setState({ results: sortedEmp })
  }

  sortLast = () => {
    const sortedEmp = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.order === "DESC") {
      sortedEmp.reverse();
      this.setState({ order: "ASC" });
    } else {
      this.setState({ order: "DESC" });
    }
    this.setState({ results: sortedEmp })
  }

  render() {
    return (
      <div>
        <Navbar handleInputChange={this.handleInputChange}
          search={this.state.search} />
      </div>
    )
  }
}

export default Search;
