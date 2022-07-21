
import './AddUserForm.css'

const AddUserForm = () => {
    return (
        <form className="user-form">
            <div className="user-form__username">
                <label htmlFor="username" >Username</label>
                <input type="text" id="username" />
            </div>
            <div className="user-form__age">
                <label htmlFor="age" >Age</label>
                <input type="number" id="age" min="18" max="35" />
            </div>
            <div className="user-form__button">
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}

export default AddUserForm