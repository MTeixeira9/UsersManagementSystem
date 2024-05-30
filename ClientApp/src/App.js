import React, { Component, useEffect, useState } from 'react';
import './custom.css';
import List from './components/List';
import { getUsers } from './functions/UserFunctions';
import Form from './components/Form';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await getUsers()
      setUsers(res)
    }

    getData()
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      <List listUsers={users} />
      <Form updateListUsers={setUsers}/>
    </div>
  );
}

export default App
