import React, { Component, useEffect, useState } from 'react';
import './custom.css';
import List from './components/List';
import { getUsers } from './functions/UserFunctions';

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
      <Form />
    </div>
  );
}

export default App
