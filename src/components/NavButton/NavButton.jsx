import './NavButton.css';
import { Link } from 'react-router-dom';

export default function NavButton({ type, url, updateFriendUrl, to }) {
    const iconSrc = type === 'about' ? './assets/about.svg'
        : type === 'back' ? './assets/back.svg'
        : type === 'friends' ? './assets/friends.svg'
        : type === 'github' ? './assets/github.svg'
        : type === 'linkedin' ? './assets/linkedin.svg'
        : type === 'mail' ? './assets/mail.svg'
        : type === 'projects' ? './assets/projects.svg'
        : type === 'resume' ? './assets/resume.svg'
        : type === 'send' ? './assets/send.svg'
        : type === 'twitter' ? './assets/twitter.svg'
        : './assets/sick.svg'

    function handleClick(e) {
        if(!to) {
            e.preventDefault()
            window.open(url, '_blank', 'noopener,noreferrer')
            updateFriendUrl()
        }
    }

    return (
        <Link className='NavButton' to={to} onClick={(e) => handleClick(e)}>
            <img src={iconSrc} alt={`${type} icon`} />
        </Link>
    )
}

 