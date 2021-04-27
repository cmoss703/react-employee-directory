import React from "react";

function Table(props) {
    console.log(props);
    return (
        <>
            {props.employees ? props.employees.map((employee, index) => (
                <tr key={index}>
                    <td><img src={employee.picture.thumbnail} alt={employee.name.first + employee.name.last} /></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                </tr>
            )) : (<p>Loading...</p>)}
        </>  
    )
};

export default Table;