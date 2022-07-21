
import './Modal.css'

const Modal = (props) => {
    return (
        <div className='modal-bg'>
            <div className='modal'>
                <h2>{props.header}</h2>
                <div className='modal-message'>
                    <p>{props.message}</p>
                    <button type="button">Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Modal