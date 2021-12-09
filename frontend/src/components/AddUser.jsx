import {Component, useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import UserService from "../services/UserService";

export default function AddUser() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        UserService.getUserById(id).then(res => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmailAddress(res.data.emailAddress)
        })
    }, [])

    const save = (e) => {
        e.preventDefault()

        const user = {firstName, lastName, emailAddress}

        if (id) {
            UserService.updateUser(id, user).then(() => {
                history.push("/")
            })
        } else {
            UserService.saveUser(user).then(() => {
                history.push("/")
            })
        }
    }

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        User
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">First name:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Last name:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Email:</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email address"
                                        name = "emailAddress"
                                        className = "form-control"
                                        value = {emailAddress}
                                        onChange = {(e) => setEmailAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => save(e)} >Submit </button>
                                <Link to="/" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}