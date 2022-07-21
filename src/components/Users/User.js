
import './User.css'

const User = (props) => {
    render (
        <li>{`${props.name} (${props.age} years old)`}</li>
    )
}

export default User