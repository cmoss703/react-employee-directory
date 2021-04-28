import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "./Navbar";
import DateFormat from 'dateformat';

class Table extends Component {

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

                <div className="table-responsive">
                    <table className="table table-striped table-resposive text-center table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th onClick={this.sortFirst} className="sortable">First Name</th>
                                <th onClick={this.sortLast} className="sortable">Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB </th>
                            </tr>
                        </thead>

                        { //First Name sort
                            this.state.results && this.state.results.map(item =>
                                item.name.first.toLowerCase().includes(this.state.search) ?
                                    <tbody key={item.login.uuid}>
                                        <tr>
                                            <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                            <td >{item.name.first}</td>
                                            <td >{item.name.last}</td>
                                            <td >{item.phone}</td>
                                            <td >{item.email}</td>
                                            <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                                        </tr>
                                    </tbody>

                                    :
                                    //Last Name sort
                                    item.name.last.toLowerCase().includes(this.state.search) ?
                                        <tbody key={item.login.uuid}>
                                            <tr>
                                                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                                <td >{item.name.first}</td>
                                                <td >{item.name.last}</td>
                                                <td >{item.phone} </td>
                                                <td >{item.email}</td>
                                                <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                                            </tr>
                                        </tbody>
                                        :
                                        null
                            )}
                    </table>
                </div>
            </div>
        )
    }
}

export default Table;