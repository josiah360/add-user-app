import UserList from "./UserList"
import './UsersContainer.css'

const UsersContainer = (props) => {
    return (
        <div className="users-container">
            <UserList users={props.users} removeUser={props.removeUser} />
        </div>
    )
}

export default UsersContainer