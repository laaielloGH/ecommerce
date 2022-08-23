import CloseIcon from '@mui/icons-material/Close';
import "./Modal.scss"

const Modal = ({title, close, children}) =>{
    return(
        <div className='diseñoModal'>
            <h2>{title}</h2>
            <CloseIcon className='botonCierre' onClick={()=> close(false)}/>
            {children}
        </div>
    )
}

export default Modal