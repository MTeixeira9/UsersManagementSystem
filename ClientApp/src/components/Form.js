import React, { useState } from "react";
import './User.css';
import { addUser, getUsers } from "../functions/UserFunctions";

const Form = ({ updateListUsers }) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [job, setJob] = useState("")


    const handleAddUser = async () => {
        const user = {
            fullName,
            email,
            job
        }

        await addUser(user)
        const users = await getUsers()
        updateListUsers(users)
    }

    return (
        <div>
            <h1>Add user:</h1>
            <label for="fullName">Full name:</label>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} id="fullName"></input>
            <br />
            <label for="email">Email:</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="email"></input>
            <br />
            <label for="job">Job:</label>
            <input type="text" value={job} onChange={e => setJob(e.target.value)} id="job"></input>
            <br />
            <button onClick={() => handleAddUser()}>Add</button>
        </div>
    )
}

export default Form