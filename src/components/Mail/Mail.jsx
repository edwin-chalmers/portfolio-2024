import './Mail.css'
import NavButton from '../NavButton/NavButton'


export default function Mail() {
    return (
        <div className='Mail center'>
            <div className='mail-contaner center'>
                <NavButton type={"back"} to={'/'} />
                <h1>Contact:</h1>
                <div className='inputs'>
                    <h2>Full Name</h2>
                    <div className='full-name-inputs'>
                        <input className='first-name-input' />
                        <input className='last-name-input' />
                    </div>
                    <h2>Email</h2>
                    <input className='email-input' />
                    <h2>Message</h2>
                    <textarea className='message-input'></textarea>
                </div>
                <div className="button-container">
                    <NavButton type={"send"} />
                </div>
            </div>
        </div>
    )
}
