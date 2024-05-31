import React from "react";
import './User.css';

const User = ({ fullName, email, job, id, handleDeleteUser }) => {

    return (
        <div className="User">
            <h5>{fullName}</h5>
            <p>{email}</p>
            <p>{job}</p>
            <button onClick={() => handleDeleteUser(id)} className="btn-primary">Delete User</button>
        </div>
    )
}

export default User