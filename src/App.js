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
  const [isFormValid, setIsFormValid] = useState(true)
  const [isAgeValid, setIsAgeValid] = useState(true)

  const addUserHandler = (newUser) => {
    setUsers(prevUsers => [newUser, ...prevUsers])
  }

  const removeUserHandler = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }

  const formValidationHandler = (bool) => {
    setIsFormValid(bool)
  }

  const AgeValidationHandler = (bool) => {
    setIsAgeValid(bool)
  }

  return (
    <div className="App">
      <div className='content'>
          <AddUserForm
            addUser={addUserHandler} 
            validateForm={formValidationHandler} 
            validateAge={AgeValidationHandler} 
          />

          <UsersContainer users={users} removeUser={removeUserHandler} />

          {!isFormValid && 
            <Modal 
              header='Invalid input'
              message='Please enter a valid name and age (non-empty values)'
              validateForm={formValidationHandler}
              validateAge={AgeValidationHandler} />
          }

          {!isAgeValid && 
            <Modal 
              header='Invalid input'
              message='Age must be between 18 and 35'
              validateForm={formValidationHandler}
              validateAge={AgeValidationHandler} />
          }
      </div>
    </div>
  );
}

export default App;
