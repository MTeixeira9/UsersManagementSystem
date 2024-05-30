import React from "react";
import './User.css';

const User = ({ fullName, email, job }) => {
    return (
        <div className="User">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{job}</p>
        </div>
    )
}

export default User