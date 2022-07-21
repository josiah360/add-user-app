import { useState } from 'react'
import './AddUserForm.css'

const AddUserForm = (props) => {

    const [username, setName] = useState('')
    const [age, setAge] = useState('')

    const usernameHandler = (e) => {
        setName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const userSubmitHandler = (e) => {
        e.preventDefault()

        const newUser = {
            name: username,
            age: +age,
            id: Math.random()
        }

        props.addUser(newUser)
        setName('')
        setAge('')
    }

    return (
        <form className="user-form" onSubmit={userSubmitHandler}>
            <div className="user-form__username">
                <label htmlFor="username" >Username</label>
                <input value={username} type="text" id="username" onChange={usernameHandler}/>
            </div>
            <div className="user-form__age">
                <label htmlFor="age" >Age</label>
                <input value={age} type="number" id="age" min="18" max="35" onChange={ageHandler}/>
            </div>
            <div className="user-form__button">
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}

export default AddUserForm