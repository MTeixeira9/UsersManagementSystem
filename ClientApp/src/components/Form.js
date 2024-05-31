import React, { useState } from "react";
import { addUser, getUsers } from "../functions/UserFunctions";
import './Form.css';

const Form = ({ updateListUsers }) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [job, setJob] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const clearForm = () => {
        setFullName("")
        setEmail("")
        setJob("")
        setErrorMessage("")
    }

    const validateFields = () => {
        return fullName.length > 0 && email.length > 0 && job.length > 0
    }

    const handleAddUser = async () => {
        if (!validateFields()) {
            setErrorMessage("All fields are mandatory!")
            return
        }

        const user = {
            fullName,
            email,
            job
        }

        await addUser(user)
        const users = await getUsers()
        updateListUsers(users)
        clearForm()
    }

    return (
        <div className="FormArea">
            <div className="LeftForm">
                <h2>Create users</h2>
                <p className="ErrorMessage">{errorMessage}</p>
            </div>
            <div className="RightForm">
                <input placeholder="Full name" type="text" value={fullName} onChange={e => setFullName(e.target.value)} id="fullName" className="required" />
                <input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" className="required" />
                <input placeholder="Job" type="text" value={job} onChange={e => setJob(e.target.value)} id="job" className="required" />
                <button onClick={() => handleAddUser()} className="btn-primary">Add</button>
            </div>
        </div>
    )
}

export default Form