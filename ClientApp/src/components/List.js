import React from "react";
import User from "./User";
import { deleteUser, getUsers } from "../functions/UserFunctions";

const List = ({ listUsers, updateListUsers }) => {

    const handleDeleteUser = async (id) => {
        await deleteUser(id)
        const users = await getUsers()
        updateListUsers(users)
    }

    const render = () => {
        if (listUsers.length === 0) {
            return <div>No users to show!</div>
        }

        return listUsers.map(({ fullName, email, job, id }) => {
            return <User key={id} id={id} fullName={fullName} email={email} job={job} handleDeleteUser={handleDeleteUser} />
        })
    }

    return (
        render()
    )
}

export default List