import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "./Navbar";
import moment from 'moment';
import "./styles.css";

class Table extends Component {

    state = {
        search: "",
        results: [],
        order: ""
    };

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

    sortByFirst = () => {
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

    sortByLast = () => {
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
                    <table className="table table-striped table-resposive text-center">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th onClick={this.sortByFirst} className="sort-name">First Name</th>
                                <th onClick={this.sortByLast} className="sort-name">Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB </th>
                            </tr>
                        </thead>

                        {this.state.results && this.state.results.map(empl =>
                            empl.name.first.toLowerCase().includes(this.state.search) ?
                                <tbody key={empl.login.uuid}>
                                    <tr>
                                        <td ><img src={empl.picture.thumbnail} alt="avatar" /></td>
                                        <td >{empl.name.first}</td>
                                        <td >{empl.name.last}</td>
                                        <td >{empl.phone}</td>
                                        <td >{empl.email}</td>
                                        <td>{moment(empl.dob.date).format("L")}</td>
                                    </tr>
                                </tbody>
                                :
                                empl.name.last.toLowerCase().includes(this.state.search) ?
                                    <tbody key={empl.login.uuid}>
                                        <tr>
                                            <td ><img src={empl.picture.thumbnail} alt="avatar" /></td>
                                            <td >{empl.name.first}</td>
                                            <td >{empl.name.last}</td>
                                            <td >{empl.phone} </td>
                                            <td >{empl.email}</td>
                                            <td>{moment(empl.dob.date).format("L")}</td>
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