import './Error.scss'
import ErrorImg from '../Img/error.png'

function Error() {
    return (
        <>
            <div className="container">
                <img className='error' src={ErrorImg} alt="ErrorImg" width={900} height={700} />
            </div>
        </>
    )
}

export default Error;