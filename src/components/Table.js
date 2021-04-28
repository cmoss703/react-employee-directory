import React from "react";
import API from "../utils/API";
import Search from "./Search";
import Navbar from "./Navbar";
import DateFormat from 'dateformat';

function Table(props) {
    console.log(props);
    return (
        <div>
            <Search />

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
};

export default Table;