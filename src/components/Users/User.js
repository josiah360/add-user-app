
import './User.css'

const User = (props) => {
    return (
        <li className='user' onClick={() => props.removeUser(props.id)}>{`${props.name} (${props.age} years old)`}</li>
    )
}

export default User