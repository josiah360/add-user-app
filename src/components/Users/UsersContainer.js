import UserList from "./UserList"
import './UsersContainer.css'

const UsersContainer = (props) => {
    return (
        <div className="users-container">
            <UserList users={props.users} removePlayer={props.removePlayer} />
        </div>
    )
}

export default UsersContainer