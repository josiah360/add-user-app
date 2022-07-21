
import './Modal.css'

const Modal = (props) => {

    const formStateHandler = () => {
        props.validateForm(true)
        props.validateAge(true)
    }


    return (
        <div className='modal-bg show-message'>
            <div className='modal'>
                <h2>{props.header}</h2>
                <div className='modal-message'>
                    <p>{props.message}</p>
                    <button type="button" onClick={ formStateHandler }>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Modal