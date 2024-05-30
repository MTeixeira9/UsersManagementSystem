import React from "react";
import User from "./User";

const List = ({ listUsers }) => {

    console.log("listUsers", listUsers)

    const render = () => {
        if (listUsers.length === 0) {
            return <div>No users to show!</div>
        }

        return listUsers.map(({ fullName, email, job, id }) => {
            return <User key={id} fullName={fullName} email={email} job={job} />
        })
    }

    return (
        render()
    )
}

export default List