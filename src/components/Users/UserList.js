import User from './User'
import './UserList.css'

const UserList = () => {
    return (
        <ul className='user-list'>
            <User name='Josiah' age={35} />
            <User name='Mariam' age={32} />
            <User name='Inioluwa' age={4} />
            <User name='Fikayo' age={1} />
        </ul>
    )
}

export default UserList