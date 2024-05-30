import React from "react";
import './User.css';

const User = ({ fullName, email, job, id, handleDeleteUser }) => {

    return (
        <div className="User">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{job}</p>
            <p onClick={() => handleDeleteUser(id)} className="delete">X</p>
        </div>
    )
}

export default User