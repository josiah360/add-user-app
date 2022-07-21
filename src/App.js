import { useState } from 'react';

import AddUserForm from './components/AddUserForm/AddUserForm';
import UsersContainer from './components/Users/UsersContainer';
import Modal from './components/Modal/Modal';
import './App.css';

const DUMMY_USERS = [
  {name: 'Josiah', age: 35, id: '1'},
  {name: 'Mariam', age: 32, id: '2'},
  {name: 'Inioluwa', age: 4, id: '3'},
  {name: 'Fikayo', age: 1, id: '4'}
]


function App() {

  const [users, setUsers] = useState(DUMMY_USERS)

  const addUserHandler = (newUser) => {
    setUsers(prevUsers => [newUser, ...prevUsers])
  }

  const removeUserHandler = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }

  return (
    <div className="App">
      <div className='content'>
          <AddUserForm addUser={addUserHandler} />
          <UsersContainer users={users} removeUser={removeUserHandler} />
          <Modal header='Invalid input' message='Please enter a valid name and age (non-empty values)'/>
      </div>
    </div>
  );
}

export default App;
