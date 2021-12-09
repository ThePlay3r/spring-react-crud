import {Component, useEffect, useState} from "react";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

export default function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        UserService.getAllUsers().then(res => {
            setUsers(res.data)
        })
    }

    const deleteUser = (id) => {
        UserService.deleteUser(id).then(() => getUsers())
    }

    return (
        <div className="container">
            <h2 className="text-center">Users</h2>
            <Link to="/add" className="btn btn-primary mb-2">Add New</Link>
            <table className="table table-bordered table-striped">
                <thead>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-Mail</th>
                <th>Actions</th>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.emailAddress}</td>
                            <td>
                                <Link className="btn btn-info" to={"/edit/" + user.id}>Edit</Link>
                                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}