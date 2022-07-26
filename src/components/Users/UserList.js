import User from './User'
import './UserList.css'

const UserList = (props) => {
    return (
        <ul className='user-list'>
            {props.users.map(user => 
                <User 
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    id={user.id}
                    removeUser={props.removeUser}
                />
            )}
        </ul>
    )
}

export default UserList