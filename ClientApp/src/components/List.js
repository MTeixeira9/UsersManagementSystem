import React from "react";
import User from "./User";
import "./List.css";
import { deleteUser, getUsers } from "../functions/UserFunctions";

const List = ({ listUsers, updateListUsers }) => {

    const handleDeleteUser = async (id) => {
        await deleteUser(id)
        const users = await getUsers()
        updateListUsers(users)
    }

    const render = () => {
        if (listUsers.length === 0) {
            return <div className="ErrorArea">
                <h2>No users to show!</h2>
            </div>
        }

        return (
            <div className="ListArea">
                <ul className="List">
                    {listUsers.map(({ fullName, email, job, id }) => {
                        return <li className="ListUser"><User key={id} id={id} fullName={fullName} email={email} job={job} handleDeleteUser={handleDeleteUser} /></li>
                    })}
                </ul>
            </div>
        )
    }

    return (
        render()
    )
}

export default List